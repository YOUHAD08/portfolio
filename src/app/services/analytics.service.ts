import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare const gtag: (...args: any[]) => void;

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        gtag('event', 'page_view', {
          page_path: event.urlAfterRedirects,
          page_title: document.title,
          page_location: window.location.href
        });
      });
  }

  trackEvent(action: string, params: Record<string, unknown> = {}): void {
    gtag('event', action, params);
  }

  trackProjectClick(projectTitle: string, linkType: 'github' | 'live' | 'doc'): void {
    this.trackEvent('project_click', {
      project_title: projectTitle,
      link_type: linkType
    });
  }
}
