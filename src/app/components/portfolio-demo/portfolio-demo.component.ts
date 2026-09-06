import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type DemoView = 'frontend' | 'api' | 'delivery' | 'chat';

interface ChatMessage {
  from: 'bot' | 'user';
  text: string;
}

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
  imports: [CommonModule, FormsModule],
  templateUrl: './portfolio-demo.component.html'
})
export class PortfolioDemoComponent {
  open = false;
  activeView: DemoView = 'frontend';
  chatInput = '';

  readonly viewKeys: DemoView[] = ['frontend', 'api', 'delivery', 'chat'];
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
    },
    chat: {
      label: 'Chatbot',
      eyebrow: '04 / assistant',
      title: 'Ask SignalDesk',
      description: 'A lightweight assistant can help teams find signals, summarize activity, and keep work moving.',
      technologies: 'Angular · Forms · Conversation state',
      progress: 76
    }
  };

  messages: ChatMessage[] = [
    { from: 'bot', text: 'Hi! I can help you explore the SignalDesk workspace.' }
  ];

  toggleOpen(): void {
    this.open = !this.open;
  }

  selectView(view: DemoView): void {
    this.activeView = view;
  }

  sendMessage(): void {
    const message = this.chatInput.trim();
    if (!message) return;

    this.messages.push({ from: 'user', text: message });
    this.messages.push({
      from: 'bot',
      text: message.toLowerCase().includes('signal')
        ? 'SignalDesk keeps active issues, owners, and status updates in one focused view.'
        : 'Try asking about signals, the queue, or how SignalDesk is built.'
    });
    this.chatInput = '';
  }
}
