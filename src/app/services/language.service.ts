import { Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'language';

export type Lang = 'en' | 'fr';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>(this.readInitialLang());

  toggle(): void {
    const next: Lang = this.lang() === 'en' ? 'fr' : 'en';
    this.lang.set(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  private readInitialLang(): Lang {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'fr' ? 'fr' : 'en';
  }
}
