import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { SkillsSphereComponent } from '../../components/skills-sphere/skills-sphere.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { CertificationsComponent } from '../../components/certifications/certifications.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, SkillsSphereComponent, ProjectsComponent, ExperienceComponent, CertificationsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
