import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { LanguageService } from '../../services/language.service';

interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'email' | 'x' | 'instagram';
}

const EMAILJS_SERVICE_ID = 'service_xy3du4q';
const EMAILJS_TEMPLATE_ID = 'template_hy1bl3e';
const EMAILJS_PUBLIC_KEY = 'NS0_P9FLCeSMQGH97';

const TEXT = {
  en: {
    pill: 'Get In Touch',
    heading: "Let's Work Together",
    tagline: "Have a project you'd like to build together, a job opportunity, or just want to say hi? I'm always open to new opportunities.",
    nameLabel: 'Your Name',
    emailLabel: 'Your Email',
    messageLabel: 'Your Message',
    messagePlaceholder: 'Type your message here...',
    send: 'Send Message',
    sending: 'Sending...',
    success: 'Message sent — thanks! I\'ll get back to you soon.',
    error: 'Something went wrong. Please try again or email me directly.'
  },
  fr: {
    pill: 'Contactez-Moi',
    heading: 'Travaillons Ensemble',
    tagline: "Vous avez un projet à construire ensemble, une opportunité professionnelle, ou juste envie de dire bonjour ? Je suis toujours ouvert à de nouvelles opportunités.",
    nameLabel: 'Votre Nom',
    emailLabel: 'Votre Email',
    messageLabel: 'Votre Message',
    messagePlaceholder: 'Écrivez votre message ici...',
    send: 'Envoyer le Message',
    sending: 'Envoi en cours...',
    success: 'Message envoyé — merci ! Je vous répondrai bientôt.',
    error: "Une erreur s'est produite. Veuillez réessayer ou m'écrire directement."
  }
};

type SendStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    { label: 'Instagram', href: 'https://www.instagram.com/ayouhad/', icon: 'instagram' }
  ];

  formName = '';
  formEmail = '';
  formMessage = '';
  status: SendStatus = 'idle';

  async sendMessage(): Promise<void> {
    if (!this.formName.trim() || !this.formEmail.trim() || !this.formMessage.trim()) return;

    this.status = 'sending';
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name: this.formName, email: this.formEmail, message: this.formMessage },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      this.status = 'success';
      this.formName = '';
      this.formEmail = '';
      this.formMessage = '';
    } catch {
      this.status = 'error';
    }
  }
}
