import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDef, TECH_ICONS } from '../../data/tech-icons.data';
import { LanguageService } from '../../services/language.service';

const TEXT = {
  en: {
    pill: 'About Me',
    heading: 'Skills',
    intro: 'Building scalable systems across the full stack — from backend architecture to cloud infrastructure, big data, MLOps, and generative AI.',
    highlights: ['Backend & Cloud', 'DevOps & Automation', 'ML & Computer Vision']
  },
  fr: {
    pill: 'À Propos',
    heading: 'Compétences',
    intro: "Je construis des systèmes évolutifs sur toute la pile technique — de l'architecture backend à l'infrastructure cloud, au big data, au MLOps, et à l'IA générative.",
    highlights: ['Backend & Cloud', 'DevOps & Automatisation', 'ML & Vision par Ordinateur']
  }
};

const SKILLS: string[] = [
  'Java', 'Spring Boot', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'Flutter',
  'Linux', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'HashiCorp', 'Jenkins',
  'GitHub Actions', 'Git', 'GitHub', 'Prometheus', 'Grafana', 'MLflow', 'ML & DL Algorithms',
  'TensorFlow', 'DVC', 'Apache Hadoop', 'Apache Spark', 'Apache HBase', 'Apache Kafka',
  'MongoDB', 'Apache Cassandra', 'PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'Power BI'
];

interface Point3 {
  x: number;
  y: number;
  z: number;
}

function fibonacciSphere(n: number): Point3[] {
  const points: Point3[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = n === 1 ? 0 : 1 - (i / (n - 1)) * 2;
    const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = goldenAngle * i;
    points.push({ x: Math.cos(theta) * radiusAtY, y, z: Math.sin(theta) * radiusAtY });
  }
  return points;
}

@Component({
  selector: 'app-skills-sphere',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-sphere.component.html',
  styleUrl: './skills-sphere.component.scss'
})
export class SkillsSphereComponent implements AfterViewInit, OnDestroy {
  skills = SKILLS;
  private basePoints = fibonacciSphere(SKILLS.length);

  @ViewChild('sphereEl') sphereEl?: ElementRef<HTMLElement>;
  @ViewChildren('tagEl') tagEls!: QueryList<ElementRef<HTMLElement>>;

  constructor(public language: LanguageService) {}

  get t() {
    return TEXT[this.language.lang()];
  }

  icon(name: string): IconDef | undefined {
    return TECH_ICONS[name];
  }

  private radius = 230;
  private yaw = 0;
  private pitch = 0.15;
  private mouseX: number | null = null;
  private mouseY: number | null = null;
  private rafId?: number;
  private lastTime = 0;

  ngAfterViewInit(): void {
    this.lastTime = performance.now();
    this.rafId = requestAnimationFrame(this.tick);
  }

  ngOnDestroy(): void {
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  onMouseMove(event: MouseEvent): void {
    const el = this.sphereEl?.nativeElement;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    this.mouseX = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    this.mouseY = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
  }

  onMouseLeave(): void {
    this.mouseX = null;
    this.mouseY = null;
  }

  private tick = (now: number): void => {
    const dt = Math.min((now - this.lastTime) / 1000, 0.05);
    this.lastTime = now;

    const idleSpeed = 0.25;
    const maxSpeed = 0.045;
    const yawVelocity = this.mouseX !== null ? this.mouseX * maxSpeed : idleSpeed;
    const pitchVelocity = this.mouseY !== null ? this.mouseY * maxSpeed * 0.6 : 0;

    this.yaw += yawVelocity * dt;
    this.pitch += pitchVelocity * dt;
    this.pitch = Math.max(-1.1, Math.min(1.1, this.pitch));

    const cosY = Math.cos(this.yaw);
    const sinY = Math.sin(this.yaw);
    const cosX = Math.cos(this.pitch);
    const sinX = Math.sin(this.pitch);

    const els = this.tagEls?.toArray();
    if (els) {
      this.basePoints.forEach((p, i) => {
        const el = els[i]?.nativeElement;
        if (!el) return;

        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;
        const y1 = p.y;

        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;
        const x2 = x1;

        const depth = (z2 + 1) / 2;
        const scale = 0.55 + depth * 0.85;
        const opacity = 0.3 + depth * 0.7;

        el.style.transform = `translate3d(${x2 * this.radius}px, ${y2 * this.radius}px, ${z2 * this.radius}px) translate(-50%, -50%) scale(${scale})`;
        el.style.opacity = `${opacity}`;
        el.style.zIndex = `${Math.round(depth * 1000)}`;
      });
    }

    this.rafId = requestAnimationFrame(this.tick);
  };
}
