import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

interface Milestone {
  dateEn: string;
  dateFr: string;
  titleEn: string;
  titleFr: string;
  company: string;
  logo: string;
  descriptionEn: string;
  descriptionFr: string;
  current?: boolean;
}

const MILESTONES: Milestone[] = [
  {
    dateEn: 'June 2025',
    dateFr: 'Juin 2025',
    titleEn: 'Consultant Engineer – eBOM Leader',
    titleFr: 'Ingénieur Consultant – Leader eBOM',
    company: 'Capgemini Engineering, Casablanca',
    logo: 'images/companies/capgemini-logo.png',
    current: true,
    descriptionEn:
      "Leading eBOM activities with clients — defining objectives, planning work, and monitoring deliverable quality — while designing an AI agent for BOM management, building a Python tool for CCN factorization, and developing a mobile app for automotive parts traceability via barcode scanning.",
    descriptionFr:
      "Pilotage des activités eBOM avec les clients — définition des objectifs, planification du travail et suivi de la qualité des livrables — tout en concevant un agent IA pour la gestion des BOM, en développant un outil Python pour la factorisation des CCN, et en créant une application mobile pour la traçabilité des pièces automobiles par scan de codes-barres."
  },
  {
    dateEn: 'December 2023',
    dateFr: 'Décembre 2023',
    titleEn: 'Consultant Engineer – eBOM Tech',
    titleFr: 'Ingénieur Consultant – Tech eBOM',
    company: 'Capgemini Engineering, Casablanca',
    logo: 'images/companies/capgemini-logo.png',
    descriptionEn:
      'Developed and maintained application solutions for BOM management, ensuring deliverable quality and coordinating closely with internal teams.',
    descriptionFr:
      "Développement et maintenance de solutions applicatives pour la gestion des BOM, en garantissant la qualité des livrables et en coordonnant étroitement avec les équipes internes."
  },
  {
    dateEn: 'December 2022',
    dateFr: 'Décembre 2022',
    titleEn: 'Consultant Engineer – eBOM Back-Office',
    titleFr: 'Ingénieur Consultant – Back-Office eBOM',
    company: 'Capgemini Engineering, Casablanca',
    logo: 'images/companies/capgemini-logo.png',
    descriptionEn: 'Processed technical deliverables and drove continuous improvement across back-office processes.',
    descriptionFr: "Traitement des livrables techniques et pilotage de l'amélioration continue des processus back-office."
  },
  {
    dateEn: 'April 2022',
    dateFr: 'Avril 2022',
    titleEn: 'Graduation Internship – Junior Project Manager (AI & Data)',
    titleFr: 'Stage de Fin d\'Études – Chef de Projet Junior (IA & Data)',
    company: 'Office National des Aéroports (ONDA), Casablanca',
    logo: 'images/companies/onda-logo.png',
    descriptionEn:
      'Deployed Deep Learning models (RNN, LSTM, GRU) to predict passenger flow, reducing wait times by 25%, and applied Lean Six Sigma (DMAIC), clustering, and classification to optimize performance.',
    descriptionFr:
      "Déploiement de modèles de Deep Learning (RNN, LSTM, GRU) pour prédire le flux de passagers, réduisant les temps d'attente de 25 %, et application du Lean Six Sigma (DMAIC), du clustering et de la classification pour optimiser la performance."
  },
  {
    dateEn: 'September 2021',
    dateFr: 'Septembre 2021',
    titleEn: 'Technical Internship – Supply Chain Analyst',
    titleFr: 'Stage Technique – Analyste Supply Chain',
    company: 'ISKO, Morocco',
    logo: 'images/companies/isko-logo.png',
    descriptionEn: 'Built a data analysis solution using Python and Power BI for logistics optimization and KPI monitoring.',
    descriptionFr: "Conception d'une solution d'analyse de données avec Python et Power BI pour l'optimisation logistique et le suivi des KPI."
  }
];

const TEXT = {
  en: {
    pill: 'Career',
    heading: "Where I've Worked",
    tagline: "A timeline of the teams, products, and problems I've worked on.",
    current: 'Current'
  },
  fr: {
    pill: 'Carrière',
    heading: 'Mon Parcours Professionnel',
    tagline: "Une chronologie des équipes, produits et problèmes sur lesquels j'ai travaillé.",
    current: 'Actuel'
  }
};

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements AfterViewInit, OnDestroy {
  milestones = MILESTONES;

  @ViewChildren('itemEl') itemEls!: QueryList<ElementRef<HTMLElement>>;
  private observer?: IntersectionObserver;

  constructor(public language: LanguageService) {}

  get t() {
    return TEXT[this.language.lang()];
  }

  milestoneDate(m: Milestone): string {
    return this.language.lang() === 'en' ? m.dateEn : m.dateFr;
  }

  milestoneTitle(m: Milestone): string {
    return this.language.lang() === 'en' ? m.titleEn : m.titleFr;
  }

  milestoneDescription(m: Milestone): string {
    return this.language.lang() === 'en' ? m.descriptionEn : m.descriptionFr;
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle('is-visible', entry.isIntersecting);
        }
      },
      { threshold: 0.15 }
    );

    this.itemEls.forEach((ref) => this.observer!.observe(ref.nativeElement));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
