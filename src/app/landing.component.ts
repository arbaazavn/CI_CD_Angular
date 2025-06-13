import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  template: `
    <div class="landing-container">
      <h2>Welcome to the Landing Page!</h2>
      <p>This is a dummy landing page.</p>
    </div>
  `,
  styles: [`
    .landing-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 60vh;
      font-size: 1.5rem;
    }
  `]
})
export class LandingComponent {}
