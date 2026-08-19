import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: AllProjectsComponent },
  { path: '**', component: NotFoundComponent }
];
