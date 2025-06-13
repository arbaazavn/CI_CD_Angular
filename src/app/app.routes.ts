import { Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { Home } from './home.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'landing', component: LandingComponent }
];
