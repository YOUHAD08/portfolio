import { AfterViewInit, Component, ElementRef, HostListener, NgZone, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import type { Unsubscribe } from 'firebase/firestore';
import { PROJECTS, Project } from '../../data/projects.data';
import { LikesService } from '../../services/likes.service';
import { LanguageService } from '../../services/language.service';
import { AnalyticsService } from '../../services/analytics.service';

const TEXT = {
  en: {
    backToHome: 'Back to Home',
    heading: 'All Projects',
    tagline: "Every project I've built, filterable by tag.",
    searchPlaceholder: 'Search tags…',
    noMatchingTags: 'No matching tags.',
    clearAll: 'Clear all',
    done: 'Done',
    filterByTag: 'Filter by tag',
    tagsSelected: (n: number) => `${n} tags selected`,
    projectCount: (n: number) => `${n} project${n === 1 ? '' : 's'}`,
    likeThisProject: 'Like this project',
    sourceCode: 'Source Code',
    liveDemo: 'Live Demo',
    documentation: 'Documentation',
    loadMore: 'Load More',
    inProgress: 'In Progress',
    privateProject: 'Private Project'
  },
  fr: {
    backToHome: "Retour à l'Accueil",
    heading: 'Tous les Projets',
    tagline: "Chaque projet que j'ai réalisé, filtrable par tag.",
    searchPlaceholder: 'Rechercher des tags…',
    noMatchingTags: 'Aucun tag correspondant.',
    clearAll: 'Tout effacer',
    done: 'Terminé',
    filterByTag: 'Filtrer par tag',
    tagsSelected: (n: number) => `${n} tags sélectionnés`,
    projectCount: (n: number) => `${n} projet${n === 1 ? '' : 's'}`,
    likeThisProject: 'Aimer ce projet',
    sourceCode: 'Code Source',
    liveDemo: 'Démo en Direct',
    documentation: 'Documentation',
    loadMore: 'Charger Plus',
    inProgress: 'En Cours',
    privateProject: 'Projet Privé'
  }
};

const PAGE_SIZE = 9;

const CATEGORY_MAP: Record<string, string> = {
  HTML: 'Languages', CSS: 'Languages', CSS3: 'Languages', JavaScript: 'Languages',
  TypeScript: 'Languages', Java: 'Languages', Python: 'Languages', SQL: 'Languages', 'T-SQL': 'Languages',
  Angular: 'Frontend',
  'Spring Boot': 'Backend & Frameworks', 'Spring Cloud': 'Backend & Frameworks', 'Spring AI': 'Backend & Frameworks',
  'Microservices Architecture': 'Backend & Frameworks', 'REST API': 'Backend & Frameworks', FastAPI: 'Backend & Frameworks',
  'AI Agent': 'AI & Machine Learning', RAG: 'AI & Machine Learning', 'Semantic-Search': 'AI & Machine Learning',
  'Vector Store': 'AI & Machine Learning', LLM: 'AI & Machine Learning', 'scikit-learn': 'AI & Machine Learning', CML: 'AI & Machine Learning',
  'Machine Learning': 'AI & Machine Learning', SMOTE: 'AI & Machine Learning', 'Data Validation': 'AI & Machine Learning',
  OpenCV: 'AI & Machine Learning', 'Image Processing': 'AI & Machine Learning',
  'Image Denoising': 'AI & Machine Learning', Convolution: 'AI & Machine Learning', 'Image Sharpening': 'AI & Machine Learning',
  'scikit-image': 'AI & Machine Learning', 'Histogram Specification': 'AI & Machine Learning',
  KNN: 'AI & Machine Learning', 'CIFAR-10': 'AI & Machine Learning', 'Cross-Validation': 'AI & Machine Learning', 'Image Classification': 'AI & Machine Learning',
  'Data Warehouse': 'Data & Analytics', EDA: 'Data & Analytics', BI: 'Data & Analytics', 'Medallion Architecture': 'Data & Analytics',
  'Time-Series Analysis': 'Data & Analytics', ETL: 'Data & Analytics', Matplotlib: 'Data & Analytics', 'Data Visualization': 'Data & Analytics',
  'SQL Server': 'Data & Analytics', 'Star Schema': 'Data & Analytics', 'Data Engineering': 'Data & Analytics',
  'Data Modeling': 'Data & Analytics', 'Kimball Methodology': 'Data & Analytics',
  CodePipeline: 'AWS', CodeBuild: 'AWS', CodeDeploy: 'AWS', CloudFormation: 'AWS', S3: 'AWS', VPC: 'AWS', CodeArtifact: 'AWS', EC2: 'AWS',
  Docker: 'DevOps', Jenkins: 'DevOps', 'CI-CD': 'DevOps', Nginx: 'DevOps', 'GitHub Actions': 'DevOps', pytest: 'DevOps',
  Git: 'Version Control', GitHub: 'Version Control'
};

const CATEGORY_ORDER = [
  'Languages',
  'Frontend',
  'Backend & Frameworks',
  'AI & Machine Learning',
  'Data & Analytics',
  'AWS',
  'DevOps',
  'Version Control'
];

const CATEGORY_LABELS_FR: Record<string, string> = {
  Languages: 'Langages',
  Frontend: 'Frontend',
  'Backend & Frameworks': 'Backend & Frameworks',
  'AI & Machine Learning': 'IA & Machine Learning',
  'Data & Analytics': 'Données & Analytique',
  AWS: 'AWS',
  DevOps: 'DevOps',
  'Version Control': 'Contrôle de Version',
  Other: 'Autre'
};

interface TagGroup {
  category: string;
  tags: string[];
}

const PROJECTS_NEWEST_FIRST = [...PROJECTS].reverse();

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.scss'
})
export class AllProjectsComponent implements OnInit, AfterViewInit, OnDestroy {
  tags = Array.from(new Set(PROJECTS.flatMap((p) => p.tags)));
  activeTags = new Set<string>();
  visibleCount = PAGE_SIZE;
  tagSearch = '';
  filterMenuOpen = false;

  private likesMap: Record<string, number> = {};
  private likedSet = new Set<string>();
  private likeCooldownSet = new Set<string>();
  private likeUnsubscribers: Unsubscribe[] = [];

  @ViewChildren('cardEl') cardEls!: QueryList<ElementRef<HTMLElement>>;
  private observer?: IntersectionObserver;

  constructor(
    private host: ElementRef<HTMLElement>,
    private likes: LikesService,
    private zone: NgZone,
    public language: LanguageService,
    private analytics: AnalyticsService
  ) {}

  trackLinkClick(project: Project, linkType: 'github' | 'live' | 'doc'): void {
    this.analytics.trackProjectClick(project.title, linkType);
  }

  get t() {
    return TEXT[this.language.lang()];
  }

  categoryLabel(category: string): string {
    return this.language.lang() === 'en' ? category : CATEGORY_LABELS_FR[category] || category;
  }

  ngOnInit(): void {
    for (const p of PROJECTS) {
      if (this.likes.hasLiked(p.title)) this.likedSet.add(p.title);
      this.likeUnsubscribers.push(
        this.likes.watchLikes(p.title, (count) => this.zone.run(() => (this.likesMap[p.title] = count)))
      );
    }
  }

  likeCount(project: Project): number {
    return this.likesMap[project.title] || 0;
  }

  isLiked(project: Project): boolean {
    return this.likedSet.has(project.title);
  }

  isLikeCoolingDown(project: Project): boolean {
    return this.likeCooldownSet.has(project.title);
  }

  async toggleLike(project: Project, event: Event): Promise<void> {
    event.stopPropagation();
    event.preventDefault();
    if (this.likeCooldownSet.has(project.title)) return;
    this.likeCooldownSet.add(project.title);
    setTimeout(() => this.likeCooldownSet.delete(project.title), 800);

    if (this.likedSet.has(project.title)) this.likedSet.delete(project.title);
    else this.likedSet.add(project.title);
    await this.likes.toggleLike(project.title);
  }

  private get allGroups(): TagGroup[] {
    const map = new Map<string, string[]>();
    for (const t of this.tags) {
      const cat = CATEGORY_MAP[t] || 'Other';
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(t);
    }
    const ordered = CATEGORY_ORDER.filter((c) => map.has(c)).map((c) => ({ category: c, tags: map.get(c)! }));
    if (map.has('Other')) ordered.push({ category: 'Other', tags: map.get('Other')! });
    return ordered;
  }

  get menuGroups(): TagGroup[] {
    const q = this.tagSearch.trim().toLowerCase();
    if (!q) return this.allGroups;
    return this.allGroups
      .map((g) => ({ category: g.category, tags: g.tags.filter((t) => t.toLowerCase().includes(q)) }))
      .filter((g) => g.tags.length > 0);
  }

  get triggerLabel(): string {
    if (this.activeTags.size === 0) return this.t.filterByTag;
    if (this.activeTags.size === 1) return [...this.activeTags][0];
    return this.t.tagsSelected(this.activeTags.size);
  }

  isTagActive(tag: string): boolean {
    return this.activeTags.has(tag);
  }

  isCategoryFullySelected(tags: string[]): boolean {
    return tags.every((t) => this.activeTags.has(t));
  }

  isCategoryPartiallySelected(tags: string[]): boolean {
    return tags.some((t) => this.activeTags.has(t)) && !this.isCategoryFullySelected(tags);
  }

  toggleTag(tag: string): void {
    if (this.activeTags.has(tag)) this.activeTags.delete(tag);
    else this.activeTags.add(tag);
    this.visibleCount = PAGE_SIZE;
  }

  toggleCategory(tags: string[]): void {
    if (this.isCategoryFullySelected(tags)) {
      tags.forEach((t) => this.activeTags.delete(t));
    } else {
      tags.forEach((t) => this.activeTags.add(t));
    }
    this.visibleCount = PAGE_SIZE;
  }

  clearFilters(): void {
    this.activeTags.clear();
    this.visibleCount = PAGE_SIZE;
  }

  toggleFilterMenu(): void {
    this.filterMenuOpen = !this.filterMenuOpen;
    if (this.filterMenuOpen) this.tagSearch = '';
  }

  closeFilterMenu(): void {
    this.filterMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.filterMenuOpen && !this.host.nativeElement.contains(event.target as Node)) {
      this.filterMenuOpen = false;
    }
  }

  private get filtered(): Project[] {
    const base = this.activeTags.size === 0
      ? PROJECTS_NEWEST_FIRST
      : PROJECTS_NEWEST_FIRST.filter((p) => p.tags.some((t) => this.activeTags.has(t)));
    return [...base].sort((a, b) => this.likeCount(b) - this.likeCount(a));
  }

  get visibleProjects(): Project[] {
    return this.filtered.slice(0, this.visibleCount);
  }

  get totalCount(): number {
    return this.filtered.length;
  }

  get hasMore(): boolean {
    return this.visibleCount < this.totalCount;
  }

  loadMore(): void {
    this.visibleCount += PAGE_SIZE;
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 }
    );

    this.cardEls.changes.subscribe(() => this.observeCards());
    this.observeCards();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.likeUnsubscribers.forEach((unsub) => unsub());
  }

  private observeCards(): void {
    this.cardEls.forEach((ref, i) => {
      const el = ref.nativeElement;
      if (!el.classList.contains('is-visible')) {
        el.style.transitionDelay = `${(i % 3) * 90}ms`;
        this.observer?.observe(el);
      }
    });
  }
}
