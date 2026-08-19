import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../services/language.service';

const TEXT = {
  en: {
    code: '404',
    heading: 'Page Not Found',
    tagline: "The page you're looking for doesn't exist or has moved.",
    backHome: 'Back to Home'
  },
  fr: {
    code: '404',
    heading: 'Page Introuvable',
    tagline: "La page que vous recherchez n'existe pas ou a été déplacée.",
    backHome: "Retour à l'Accueil"
  }
};

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  constructor(public language: LanguageService) {}

  get t() {
    return TEXT[this.language.lang()];
  }
}
