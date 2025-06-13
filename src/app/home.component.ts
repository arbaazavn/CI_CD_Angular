import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-container">
      <button class="go-btn" (click)="goToLanding()">
        <span class="arrow">→</span> Go to Application
      </button>
    </div>
  `,
  styles: [`
    .home-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80vh;
    }
    .go-btn {
      font-size: 2rem;
      padding: 2rem 3rem;
      border-radius: 2rem;
      border: none;
      background: linear-gradient(90deg, #f0060b 0%, #ff41f8 50%, #7702ff 100%);
      color: #fff;
      font-weight: bold;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 1rem;
      box-shadow: 0 4px 24px rgba(0,0,0,0.08);
      transition: background 0.2s;
    }
    .go-btn:hover {
      background: linear-gradient(90deg, #7702ff 0%, #ff41f8 50%, #f0060b 100%);
    }
    .arrow {
      font-size: 2.5rem;
      margin-right: 1rem;
    }
  `]
})
export class Home {
  constructor(private router: Router) {}
  goToLanding() {
    this.router.navigate(['/landing']);
  }
}
