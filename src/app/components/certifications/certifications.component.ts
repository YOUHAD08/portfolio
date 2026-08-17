import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDef, TECH_ICONS } from '../../data/tech-icons.data';
import { LanguageService } from '../../services/language.service';

type CategoryId = 'education' | 'certification' | 'course';

interface CredentialItem {
  title: string;
  issuer: string;
  date?: string;
  image?: string;
  credentialUrl?: string;
  glowColor?: string;
  inProgress?: boolean;
  placeholderIcon?: string;
}

interface Category {
  id: CategoryId;
  labelEn: string;
  labelFr: string;
  items: CredentialItem[];
}

const TEXT = {
  en: {
    pill: 'Credentials',
    heading: 'Certifications',
    tagline: 'Education, industry certifications, and coursework that back up my skill set.',
    verify: 'Verify Credential',
    inProgress: 'In Progress',
    noLink: 'No Link Yet',
    prev: 'Previous',
    next: 'Next'
  },
  fr: {
    pill: 'Diplômes',
    heading: 'Certifications',
    tagline: 'Formation, certifications professionnelles et cours qui renforcent mes compétences.',
    verify: 'Vérifier le Diplôme',
    inProgress: 'En Cours',
    noLink: 'Pas Encore de Lien',
    prev: 'Précédent',
    next: 'Suivant'
  }
};

const CATEGORIES: Category[] = [
  {
    id: 'education',
    labelEn: 'Education',
    labelFr: 'Formation',
    items: [
      {
        title: 'Advanced Master, Engineering, Computer Science, Big Data, and Cloud Computing',
        issuer: 'ENSET Mohammedia',
        date: 'Oct 2024 – Oct 2026',
        inProgress: true
      },
      {
        title: 'Engineering Degree, Engineering/Industrial Management',
        issuer: 'Mohammed VI International Academy of Civil Aviation',
        date: 'Sep 2019 – Sep 2022'
      },
      {
        title: 'Preparatory Classes for Grandes Écoles, MPSI/MP (Mathematics, Physics, and Engineering Sciences)',
        issuer: 'CPGE Ibn Timiya',
        date: 'Sep 2017 – Sep 2019'
      },
      {
        title: 'Baccalaureate, Mathematics',
        issuer: 'Toubkal High School',
        date: 'Sep 2016 – Sep 2017'
      }
    ]
  },
  {
    id: 'certification',
    labelEn: 'Certifications',
    labelFr: 'Certifications',
    items: [
      {
        title: 'CyberOps Associate',
        issuer: 'Cisco Networking Academy',
        date: '2024',
        image: 'https://images.credly.com/size/340x340/images/53f37f83-04a1-4935-9b1e-21a99cc6e1b2/CyberOpsAssoc.png',
        credentialUrl: 'https://www.credly.com/badges/f8396209-7e73-4c62-84e8-c6783a3ee9ac/public_url',
        glowColor: '41, 171, 226'
      },
      {
        title: 'CCNA: Introduction to Networks',
        issuer: 'Cisco',
        date: '2024',
        image: 'https://images.credly.com/size/340x340/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png',
        credentialUrl: 'https://www.credly.com/badges/37f85003-a6f8-4184-987a-762298752f6d/public_url',
        glowColor: '71, 184, 223'
      },
      {
        title: 'Linux Essentials',
        issuer: 'Cisco',
        date: '2024',
        image: 'https://images.credly.com/size/340x340/images/e8fe3d67-2967-43d0-bc4a-7a268a37f47b/image.png',
        credentialUrl: 'https://www.credly.com/badges/1ee43637-3971-42cf-969a-3b4f2ff96783/public_url',
        glowColor: '72, 185, 224'
      },
      {
        title: 'Linux Unhatched',
        issuer: 'Cisco',
        date: '2024',
        image: 'https://images.credly.com/size/340x340/images/f25ec9d4-c59d-49b9-944a-f160012e81cd/image.png',
        credentialUrl: 'https://www.credly.com/badges/67b3be70-a5b1-4f74-a24f-e53f51acb4c8/public_url',
        glowColor: '145, 191, 128'
      },
      {
        title: 'EF SET English Certificate 79/100 (C2 Proficient)',
        issuer: 'EF SET',
        date: 'Jul 2025',
        image: 'images/certifications/efset-english-certificate.png',
        credentialUrl: 'https://cert.efset.org/en/WxvCwf'
      },
      {
        title: 'AWS Solutions Architect – Associate',
        issuer: 'AWS',
        date: '2026',
        inProgress: true,
        placeholderIcon: 'AWS'
      },
      {
        title: 'Java SE 17 Developer',
        issuer: 'Oracle',
        date: '2026',
        inProgress: true,
        placeholderIcon: 'Java'
      }
    ]
  },
  {
    id: 'course',
    labelEn: 'Courses',
    labelFr: 'Cours',
    items: [
      {
        title: 'AI Automation: Build LLM Apps & AI-Agents with n8n & APIs',
        issuer: 'Udemy',
        image: 'images/certifications/ai-automation.jpg',
        credentialUrl: 'https://www.udemy.com/certificate/UC-c33f8b2b-d6e9-4163-b982-789f8f3ae88f/'
      },
      {
        title: 'AI Agents and Agentic AI Architecture in Python',
        issuer: 'Coursera',
        image: 'images/certifications/ai-agents-1.jpeg',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/5R2W4H77DUJM'
      },
      {
        title: 'AI Agents and Agentic AI with Python & Generative AI',
        issuer: 'Coursera',
        image: 'images/certifications/ai-agents-2.jpeg',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/HIJHBQYHE6P2'
      },
      {
        title: 'Project Initiation: Starting a Successful Project',
        issuer: 'Google',
        image: 'images/certifications/project-initiation-starting-a-successful-project.jpeg',
        credentialUrl: 'https://coursera.org/verify/88HKPND463GA'
      },
      {
        title: 'Agile Project Management',
        issuer: 'Google',
        image: 'images/certifications/Agile%20Project%20Management.jpeg',
        credentialUrl: 'https://coursera.org/verify/Y8MS3HGB3Q5G'
      },
      {
        title: 'Foundations of Project Management',
        issuer: 'Google',
        image: 'images/certifications/Foundations%20of%20Project%20Management.jpeg',
        credentialUrl: 'https://coursera.org/verify/U23YSGQPVTSJ'
      },
      {
        title: 'Introduction to Generative AI Learning Path',
        issuer: 'Google',
        image: 'images/certifications/Introduction%20to%20Generative%20AI%20Learning%20Path.jpeg',
        credentialUrl: 'https://coursera.org/verify/specialization/E2KMXA52LA2W'
      },
      {
        title: 'Microsoft Excel Certification Exam Prep',
        issuer: 'Maven',
        image: 'images/certifications/Microsoft%20Excel%20Certification%20Exam%20Prep.jpg',
        credentialUrl: 'https://www.udemy.com/certificate/UC-5492f9b1-aba6-4ed5-8b2a-6ef2861310f1/'
      },
      {
        title: 'Project Charter Specialist',
        issuer: 'AIGPE',
        image: 'images/certifications/Project%20Charter%20Specialist%20.jpg',
        credentialUrl: 'https://www.udemy.com/certificate/UC-f20b2ac8-c29e-48b7-ab3d-c8367fc1727b/'
      }
    ]
  }
];

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent implements AfterViewInit, OnDestroy {
  categories = CATEGORIES;
  activeId: CategoryId = 'certification';

  private glowColors: Record<string, string> = {};
  private autoScrollRafId?: number;
  autoScrollPaused = false;
  hoverPaused = false;
  private resumeTimer?: ReturnType<typeof setTimeout>;
  private readonly autoScrollSpeed = 1.25;
  private currentSpeed = 0;
  private readonly easeFactorDecel = 0.06;
  private readonly easeFactorAccel = 0.3;

  @ViewChild('track') track?: ElementRef<HTMLElement>;

  constructor(private cdr: ChangeDetectorRef, public language: LanguageService) {}

  get t() {
    return TEXT[this.language.lang()];
  }

  categoryLabel(cat: Category): string {
    return this.language.lang() === 'en' ? cat.labelEn : cat.labelFr;
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
    const cards = Array.from(el.querySelectorAll<HTMLElement>('.certifications__card'));

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

  get active(): Category {
    return this.categories.find((c) => c.id === this.activeId)!;
  }

  get trackItems(): CredentialItem[] {
    const items = this.active.items;
    return items.length > 1 ? [...items, ...items] : items;
  }

  trackByIndex(index: number): number {
    return index;
  }

  glow(item: CredentialItem): string | null {
    return item.glowColor ?? this.glowColors[item.title] ?? null;
  }

  placeholderIcon(item: CredentialItem): IconDef | undefined {
    return item.placeholderIcon ? TECH_ICONS[item.placeholderIcon] : undefined;
  }

  onImageLoad(event: Event, title: string): void {
    const img = event.target as HTMLImageElement;
    try {
      const canvas = document.createElement('canvas');
      const size = 40;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, size, size);
      const data = ctx.getImageData(0, 0, size, size).data;

      let r = 0, g = 0, b = 0, count = 0;
      for (let i = 0; i < data.length; i += 4) {
        const alpha = data[i + 3];
        if (alpha > 200) {
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
          count++;
        }
      }
      if (count === 0) return;
      r = Math.round(r / count);
      g = Math.round(g / count);
      b = Math.round(b / count);

      this.glowColors[title] = `${r}, ${g}, ${b}`;
      this.cdr.detectChanges();
    } catch {
      // Cross-origin image without CORS headers — canvas read is blocked, skip the glow.
    }
  }

  get canScrollLeft(): boolean {
    return this.active.items.length > 1;
  }

  get canScrollRight(): boolean {
    return this.active.items.length > 1;
  }

  selectCategory(id: CategoryId): void {
    this.activeId = id;
    if (this.track) this.track.nativeElement.scrollLeft = 0;
    Promise.resolve().then(() => this.cdr.detectChanges());
  }

  private cardStep(): number {
    const el = this.track?.nativeElement;
    if (!el) return 344;
    const card = el.querySelector('.certifications__card') as HTMLElement | null;
    if (!card) return 344;
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
