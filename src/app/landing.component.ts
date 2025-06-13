import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  template: `
    <div class="landing-bg">
      <div class="landing-card">
        <h1>Welcome to the Landing Page!</h1>
        <p>This is a beautiful dummy landing page. 🎉</p>
      </div>
    </div>
  `,
  styles: [`
    .landing-bg {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(90deg, #f0060b 0%, #ff41f8 50%, #7702ff 100%);
    }
    .landing-card {
      background: #fff;
      padding: 3rem 4rem;
      border-radius: 2rem;
      box-shadow: 0 8px 32px rgba(253, 160, 133, 0.2);
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
    .landing-card h1 {
      margin-bottom: 0.5rem;
      color: #ff7e5f;
      font-size: 2.5rem;
    }
    .landing-card p {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      color: #333;
    }
    .go-btn {
      font-size: 1.5rem;
      padding: 1rem 2.5rem;
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
      transition: background 0.2s, transform 0.2s;
    }
    .go-btn:hover {
      background: linear-gradient(90deg, #7702ff 0%, #ff41f8 50%, #f0060b 100%);
      transform: scale(1.05);
    }
    .arrow {
      font-size: 2rem;
      margin-right: 0.5rem;
    }
  `]
})
export class LandingComponent {}
