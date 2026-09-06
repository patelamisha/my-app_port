import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type DemoView = 'frontend' | 'api' | 'delivery';

interface ViewDetails {
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  technologies: string;
  progress: number;
}

@Component({
  selector: 'app-portfolio-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-demo.component.html'
})
export class PortfolioDemoComponent {
  open = false;
  activeView: DemoView = 'frontend';

  readonly viewKeys: DemoView[] = ['frontend', 'api', 'delivery'];
  readonly views: Record<DemoView, ViewDetails> = {
    frontend: {
      label: 'Frontend',
      eyebrow: '01 / interface',
      title: 'A focused operations workspace',
      description: 'Angular components keep SignalDesk responsive and easy to evolve as the product grows.',
      technologies: 'Angular · TypeScript · CSS',
      progress: 92
    },
    api: {
      label: 'API',
      eyebrow: '02 / services',
      title: 'Structured data behind the UI',
      description: 'A .NET API gives SignalDesk a clear home for typed services, API states, and production-ready data flow.',
      technologies: '.NET · REST · Typed models',
      progress: 68
    },
    delivery: {
      label: 'Delivery',
      eyebrow: '03 / release',
      title: 'Designed for the next release',
      description: 'A responsive layout and clear project boundaries make SignalDesk straightforward to iterate on and ship.',
      technologies: 'Responsive · GitHub · CI-ready',
      progress: 84
    }
  };

  toggleOpen(): void {
    this.open = !this.open;
  }

  selectView(view: DemoView): void {
    this.activeView = view;
  }
}
