import { AfterViewInit, Component, ElementRef, HostListener, NgZone, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import type { Unsubscribe } from 'firebase/firestore';
import { PROJECTS, Project, ProjectCategory } from '../../data/projects.data';
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

const CATEGORY_LABELS_FR: Record<ProjectCategory, string> = {
  Frontend: 'Frontend',
  Backend: 'Backend',
  'Mobile Dev': 'Mobile',
  DevOps: 'DevOps',
  AWS: 'AWS',
  'Big Data / Data Engineering': 'Big Data / Data Engineering',
  MLOps: 'MLOps',
  GenAI: 'GenAI'
};

const CATEGORY_ORDER: ProjectCategory[] = [
  'AWS',
  'Backend',
  'Frontend',
  'DevOps',
  'GenAI',
  'MLOps',
  'Big Data / Data Engineering',
  'Mobile Dev'
];

interface TreeNode {
  primary: string;
  children: string[];
}

interface TagGroup {
  category: ProjectCategory;
  tags: string[];
  tree?: TreeNode[];
}

const PAGE_SIZE = 9;

const PROJECTS_NEWEST_FIRST = [...PROJECTS].reverse();

const AWS_TREE: TreeNode[] = [
  { primary: 'Amazon EC2', children: ['AMI', 'Instance Store', 'Spot Instances', 'Launch Template', 'Placement Groups'] },
  { primary: 'Amazon VPC', children: ['ENI', 'Internet Gateway', 'NAT Gateway', 'NAT Instance', 'Subnets', 'Route Tables', 'Security Groups', 'NACLs', 'VPC Endpoints', 'VPC Gateway Endpoints', 'VPC Flow Log'] },
  { primary: 'Amazon EBS', children: ['EBS Volumes', 'EBS Snapshots'] },
  { primary: 'Amazon S3', children: ['S3 Bucket Policies'] },
  { primary: 'Amazon CloudFront', children: ['OAC'] },
  { primary: 'Amazon Route 53', children: ['Route 53 Alias record'] },
  { primary: 'Amazon Aurora', children: ['Aurora Global Database'] },
  { primary: 'Amazon RDS', children: ['RDS Proxy', 'Read Replica'] },
  { primary: 'Amazon CloudWatch', children: ['CloudWatch Alarms', 'Amazon CloudWatch Logs'] },
  { primary: 'Amazon SQS', children: ['Dead Letter Queue'] },
  { primary: 'Amazon Kinesis Data Streams', children: ['Kinesis Shards'] },
  { primary: 'AWS IAM', children: ['IAM Roles', 'IAM Access Keys'] },
  { primary: 'Amazon API Gateway', children: [] },
  { primary: 'Amazon DynamoDB', children: [] },
  { primary: 'Amazon ECR', children: [] },
  { primary: 'Amazon ECS', children: [] },
  { primary: 'Amazon EKS', children: [] },
  { primary: 'Amazon ElastiCache', children: [] },
  { primary: 'Amazon EventBridge', children: [] },
  { primary: 'Amazon FSx', children: [] },
  { primary: 'Amazon Kinesis Firehose', children: [] },
  { primary: 'Amazon MQ', children: [] },
  { primary: 'Amazon Route 53 Resolver', children: [] },
  { primary: 'Amazon SNS', children: [] },
  { primary: 'AWS Backup', children: [] },
  { primary: 'AWS CLI', children: [] },
  { primary: 'AWS CloudFormation', children: [] },
  { primary: 'AWS CloudShell', children: [] },
  { primary: 'AWS Compute Optimizer', children: [] },
  { primary: 'AWS Database Migration Service', children: [] },
  { primary: 'AWS DataSync', children: [] },
  { primary: 'AWS Global Accelerator', children: [] },
  { primary: 'AWS KMS', children: ['Encryption at Rest', 'Customer Managed Keys (CMK)', 'Symmetric Encryption', 'Key Policies'] },
  { primary: 'AWS Lambda', children: [] },
  { primary: 'AWS Management Console', children: [] },
  { primary: 'AWS PrivateLink', children: [] },
  { primary: 'AWS Secrets Manager', children: [] },
  { primary: 'AWS Snow Family', children: [] },
  { primary: 'AWS Storage Gateway', children: [] },
  { primary: 'AWS Transfer Family', children: [] },
  { primary: 'Auto Scaling Group', children: [] },
  { primary: 'Elastic IP', children: [] },
  { primary: 'ALB', children: [] },
  { primary: 'NLB', children: [] },
  { primary: 'GWLB', children: [] },
  { primary: 'Target Groups', children: [] },
  { primary: 'CodeArtifact', children: [] },
  { primary: 'CodeBuild', children: [] },
  { primary: 'CodeDeploy', children: [] },
  { primary: 'CodePipeline', children: [] },
  { primary: 'Amazon GuardDuty', children: [] },
  { primary: 'AWS CloudTrail', children: [] }
];

const BACKEND_TAGS = [
  'Eureka',
  'Java',
  'JWT Authentication',
  'MinIO',
  'REST API',
  'Spring Boot',
  'Spring Cloud',
  'Spring Data JPA',
  'Spring MVC',
  'Spring Security',
  'Thymeleaf',
  'WebFlux',
  'Firebase',
  'Nginx'
];

const FRONTEND_TAGS = ['Angular', 'CSS3', 'EmailJS', 'HTML', 'JavaScript', 'SCSS', 'TypeScript', 'Bootstrap'];

const DEVOPS_TAGS = ['Docker', 'Kubernetes', 'GitHub', 'Jenkins', 'Terraform', 'Linux'];

const GENAI_TAGS = [
  'AI Agent',
  'DALL-E 3',
  'GPT-4',
  'n8n',
  'LLM',
  'MCP',
  'Multi-Agent',
  'Multimodal AI',
  'OpenAI',
  'OpenAI Embeddings',
  'OpenAI GPT-4',
  'OpenAI Whisper',
  'OpenCV',
  'Pinecone',
  'Python',
  'RAG',
  'Semantic-Search',
  'Sentiment Analysis',
  'Spring AI',
  'Vector Store',
  'Voice-to-Text'
];

const MLOPS_TAGS = [
  'CML',
  'Data Validation',
  'Python',
  'pytest',
  'scikit-learn',
  'SMOTE',
  'Image Classification',
  'Image Denoising',
  'Image Processing',
  'Image Sharpening',
  'KNN',
  'Matplotlib',
  'Data Visualization',
  'PyTorch',
  'MLflow',
  'DVC',
  'Jupyter Notebook',
  'Pandas',
  'Seaborn'
];

const BIG_DATA_TAGS = [
  'Apache Kafka',
  'Apache Spark',
  'BI',
  'Data Modeling',
  'Data Visualization',
  'Data Warehouse',
  'EDA',
  'ETL',
  'Hadoop',
  'Hadoop HDFS',
  'HDFS',
  'Kafka Streams',
  'Kimball Methodology',
  'MapReduce',
  'Medallion Architecture',
  'Spark SQL',
  'SQL',
  'SQL Server',
  'Star Schema',
  'Time-Series Analysis',
  'T-SQL',
  'Redis',
  'MySQL',
  'H2 Database'
];

const MOBILE_TAGS = ['Android', 'Android Studio', 'Dart', 'Flutter', 'Riverpod'];

const CURATED_TAGS: Partial<Record<ProjectCategory, string[]>> = {
  Backend: BACKEND_TAGS,
  Frontend: FRONTEND_TAGS,
  DevOps: DEVOPS_TAGS,
  GenAI: GENAI_TAGS,
  MLOps: MLOPS_TAGS,
  'Big Data / Data Engineering': BIG_DATA_TAGS,
  'Mobile Dev': MOBILE_TAGS
};

function buildCategoryGroups(): TagGroup[] {
  const allTagsUsed = new Set(PROJECTS.flatMap((p) => p.tags));

  return CATEGORY_ORDER.map((category) => {
    const curated = CURATED_TAGS[category];
    if (curated) {
      const tags = curated.filter((t) => allTagsUsed.has(t));
      return { category, tags };
    }

    const usedTags = new Set(PROJECTS.filter((p) => p.category === category).flatMap((p) => p.tags));
    const tags = Array.from(usedTags).sort((a, b) => a.localeCompare(b));

    if (category === 'AWS') {
      const tree = AWS_TREE
        .map((node) => ({ primary: node.primary, children: node.children.filter((c) => usedTags.has(c)) }))
        .filter((node) => usedTags.has(node.primary) || node.children.length > 0);
      return { category, tags, tree };
    }

    return { category, tags };
  }).filter((g) => g.tags.length > 0);
}

const ALL_GROUPS = buildCategoryGroups();

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.scss'
})
export class AllProjectsComponent implements OnInit, AfterViewInit, OnDestroy {
  activeTags = new Set<string>();
  tagSearch = '';
  filterMenuOpen = false;
  visibleCount = PAGE_SIZE;

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

  categoryLabel(category: ProjectCategory): string {
    return this.language.lang() === 'en' ? category : CATEGORY_LABELS_FR[category];
  }

  get menuGroups(): TagGroup[] {
    const q = this.tagSearch.trim().toLowerCase();
    if (!q) return ALL_GROUPS;
    return ALL_GROUPS
      .map((g) => {
        const tags = g.tags.filter((t) => t.toLowerCase().includes(q));
        if (!g.tree) return { category: g.category, tags };

        const tree = g.tree
          .map((node) => {
            const primaryMatches = node.primary.toLowerCase().includes(q);
            const children = primaryMatches ? node.children : node.children.filter((c) => c.toLowerCase().includes(q));
            return { primary: node.primary, children, primaryMatches };
          })
          .filter((node) => node.primaryMatches || node.children.length > 0)
          .map(({ primary, children }) => ({ primary, children }));

        return { category: g.category, tags, tree };
      })
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
