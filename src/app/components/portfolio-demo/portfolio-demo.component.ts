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
      title: 'Components with a clear job',
      description: 'Standalone Angular sections keep the portfolio easy to extend without turning the page into one giant component.',
      technologies: 'Angular · TypeScript · CSS',
      progress: 92
    },
    api: {
      label: 'API',
      eyebrow: '02 / services',
      title: 'Ready for real project data',
      description: 'The project surface leaves room for typed services, API states, and the kind of data flow a production app needs.',
      technologies: '.NET · REST · Typed models',
      progress: 68
    },
    delivery: {
      label: 'Delivery',
      eyebrow: '03 / release',
      title: 'Built to keep moving',
      description: 'A responsive layout, focused sections, and a small component footprint make iteration and deployment straightforward.',
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
