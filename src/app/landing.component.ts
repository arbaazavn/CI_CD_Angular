import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgStyle],
  template: `
    <div class="landing-bg">
      <div class="landing-card">
        <h1>Welcome to App for CI/CD for GitHub Actions!🎉</h1>
        <p>
          This application demonstrates a modern Angular setup with automated Continuous Integration and Continuous Deployment (CI/CD) using GitHub Actions.<br>
          Easily build, test, and deploy your Angular projects with confidence!
        </p>
        <button
          class="go-btn"
          (mousemove)="onBtnMouseMove($event)"
          (mouseleave)="onBtnMouseLeave()"
          [ngStyle]="{'background': btnBg}"
          (click)="learnMore()"
        >
          <span class="arrow">🚀</span>
          Learn More
        </button>
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
      max-width: 500px;
    }
    .landing-card h1 {
      margin-bottom: 0.5rem;
      color: #ff7e5f;
      font-size: 2.5rem;
      font-weight: 700;
      letter-spacing: 1px;
    }
    .landing-card p {
      font-size: 1.2rem;
      margin-bottom: 1.5rem;
      color: #333;
      line-height: 1.6;
    }
    .go-btn {
      font-size: 1.2rem;
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
      outline: none;
      position: relative;
      overflow: hidden;
    }
    .go-btn:hover {
      transform: scale(1.05);
    }
    .arrow {
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }
  `]
})
export class LandingComponent {
  btnBg = 'linear-gradient(90deg, #f0060b 0%, #ff41f8 50%, #7702ff 100%)';

  learnMore() {
    window.open('https://docs.github.com/en/actions', '_blank');
  }

  onBtnMouseMove(event: MouseEvent) {
    const btn = event.target as HTMLElement;
    const rect = btn.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    this.btnBg = `linear-gradient(90deg, #f0060b 0%, #ff41f8 ${percent}%, #7702ff 100%)`;
  }

  onBtnMouseLeave() {
    this.btnBg = 'linear-gradient(90deg, #f0060b 0%, #ff41f8 50%, #7702ff 100%)';
  }
}
