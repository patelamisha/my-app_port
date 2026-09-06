import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { TodoDemoComponent } from '../todo-demo/todo-demo.component';
import { TictactoeDemoComponent } from '../tictactoe-demo/tictactoe-demo.component';
import { PortfolioDemoComponent } from '../portfolio-demo/portfolio-demo.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [RevealDirective, PortfolioDemoComponent, TodoDemoComponent, TictactoeDemoComponent],
  templateUrl: './work.component.html'
})
export class WorkComponent {}
