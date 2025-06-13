import { Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { HomeComponent } from './home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'landing', component: LandingComponent }
];
