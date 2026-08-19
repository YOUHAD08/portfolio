import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { AnalyticsService } from './services/analytics.service';

const ROUTE_TITLES: Record<string, string> = {
  '/': 'Ayoub Youhad',
  '/projects': 'All Projects — Ayoub Youhad'
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, BackToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor(private analytics: AnalyticsService, private router: Router, private titleService: Title) {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.titleService.setTitle(ROUTE_TITLES[event.urlAfterRedirects] ?? 'Ayoub Youhad');
      });
  }
}
