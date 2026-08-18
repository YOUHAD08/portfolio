import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PROJECTS, Project } from '../../data/projects.data';
import { LanguageService } from '../../services/language.service';

const TEXT = {
  en: {
    heading: 'My Works',
    tagline: "A selection of projects I've built, spanning backend systems, cloud infrastructure, and full-stack applications.",
    sourceCode: 'Source Code',
    liveDemo: 'Live Demo',
    viewAll: 'View All Projects',
    inProgress: 'In Progress',
    privateProject: 'Private Project'
  },
  fr: {
    heading: 'Mes Réalisations',
    tagline: "Une sélection de projets que j'ai réalisés, couvrant les systèmes backend, l'infrastructure cloud et les applications full-stack.",
    sourceCode: 'Code Source',
    liveDemo: 'Démo en Direct',
    viewAll: 'Voir Tous les Projets',
    inProgress: 'En Cours',
    privateProject: 'Projet Privé'
  }
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
  projects = PROJECTS.filter((p) => p.featured);

  autoScrollPaused = false;
  hoverPaused = false;

  private autoScrollRafId?: number;
  private resumeTimer?: ReturnType<typeof setTimeout>;
  private readonly autoScrollSpeed = 1.25;
  private currentSpeed = 0;
  private readonly easeFactorDecel = 0.06;
  private readonly easeFactorAccel = 0.3;

  @ViewChild('track') track!: ElementRef<HTMLElement>;

  constructor(public language: LanguageService) {}

  get t() {
    return TEXT[this.language.lang()];
  }

  get trackItems(): Project[] {
    return this.projects.length > 1 ? [...this.projects, ...this.projects] : this.projects;
  }

  trackByIndex(index: number): number {
    return index;
  }

  get canScrollLeft(): boolean {
    return this.projects.length > 1;
  }

  get canScrollRight(): boolean {
    return this.projects.length > 1;
  }

  ngAfterViewInit(): void {
    this.autoScrollRafId = requestAnimationFrame(this.autoScrollTick);
  }

  ngOnDestroy(): void {
    if (this.autoScrollRafId) cancelAnimationFrame(this.autoScrollRafId);
    if (this.resumeTimer) clearTimeout(this.resumeTimer);
  }

  private autoScrollTick = (): void => {
    const el = this.track?.nativeElement;
    if (el) {
      const singleSetWidth = el.scrollWidth / 2;
      if (singleSetWidth > 1) {
        const targetSpeed = this.autoScrollPaused || this.hoverPaused ? 0 : this.autoScrollSpeed;
        const factor = targetSpeed > this.currentSpeed ? this.easeFactorAccel : this.easeFactorDecel;
        this.currentSpeed += (targetSpeed - this.currentSpeed) * factor;
        if (Math.abs(this.currentSpeed) > 0.001) {
          el.scrollLeft += this.currentSpeed;
        }
        if (el.scrollLeft >= singleSetWidth) {
          el.scrollLeft -= singleSetWidth;
        } else if (el.scrollLeft < 0) {
          el.scrollLeft += singleSetWidth;
        }
      }
      this.updateCardTransforms(el);
    }
    this.autoScrollRafId = requestAnimationFrame(this.autoScrollTick);
  };

  private updateCardTransforms(el: HTMLElement): void {
    const trackRect = el.getBoundingClientRect();
    const centerX = trackRect.left + trackRect.width / 2;
    const halfWidth = trackRect.width / 2 || 1;
    const cards = Array.from(el.querySelectorAll<HTMLElement>('.projects__card'));

    const dists = cards.map((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      return (cardCenter - centerX) / halfWidth;
    });

    cards.forEach((card, i) => {
      const clamped = Math.max(-1.6, Math.min(1.6, dists[i]));
      const sign = clamped < 0 ? -1 : 1;
      const norm = Math.min(1, Math.abs(clamped) / 1.6);
      const eased = norm * norm * (3 - 2 * norm);
      const scale = 1 - eased * 0.26;
      const rotateY = sign * eased * -26;
      const opacity = 1 - eased * 0.8;
      const translateZ = -eased * 150;
      card.style.transform = `translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
      card.style.opacity = String(opacity);
    });
  }

  private pauseAutoScrollTemporarily(): void {
    this.autoScrollPaused = true;
    if (this.resumeTimer) clearTimeout(this.resumeTimer);
    this.resumeTimer = setTimeout(() => {
      this.autoScrollPaused = false;
    }, 1200);
  }

  onTrackMouseEnter(): void {
    this.hoverPaused = true;
  }

  onTrackMouseLeave(): void {
    this.hoverPaused = false;
  }

  private cardStep(): number {
    const el = this.track?.nativeElement;
    if (!el) return 364;
    const card = el.querySelector('.projects__card') as HTMLElement | null;
    if (!card) return 364;
    const gap = parseFloat(getComputedStyle(el).columnGap || '24');
    return card.getBoundingClientRect().width + gap;
  }

  scroll(direction: 1 | -1): void {
    this.pauseAutoScrollTemporarily();
    this.currentSpeed = 0;
    const el = this.track?.nativeElement;
    if (!el) return;
    el.scrollBy({ left: this.cardStep() * direction, behavior: 'smooth' });
  }

  onScroll(): void {}
}
