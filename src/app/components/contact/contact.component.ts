import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email' | 'x' | 'instagram';
}

const TEXT = {
  en: {
    pill: 'Get In Touch',
    heading: "Let's Work Together",
    tagline: "Have a project in mind or just want to say hi? I'm always open to new opportunities.",
    emailMe: 'Email Me'
  },
  fr: {
    pill: 'Contactez-Moi',
    heading: 'Travaillons Ensemble',
    tagline: "Un projet en tête ou juste envie de dire bonjour ? Je suis toujours ouvert à de nouvelles opportunités.",
    emailMe: 'Envoyer un Email'
  }
};

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(public language: LanguageService) {}

  get t() {
    return TEXT[this.language.lang()];
  }

  email = 'yo_ayoub@etu.enset-media.ac.ma';

  socials: SocialLink[] = [
    { label: 'GitHub', href: 'https://github.com/YOUHAD08', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/youhad-ayoub/', icon: 'linkedin' },
    { label: 'X', href: 'https://x.com/Ayoub1457161', icon: 'x' },
    { label: 'Instagram', href: 'https://www.instagram.com/ayouhad/', icon: 'instagram' },
    { label: 'Email', href: 'mailto:yo_ayoub@etu.enset-media.ac.ma', icon: 'email' }
  ];
}
