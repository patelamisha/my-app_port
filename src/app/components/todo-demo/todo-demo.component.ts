import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Todo {
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-todo-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-demo.component.html'
})
export class TodoDemoComponent {
  open = false;
  newTodo = '';
  todos: Todo[] = [];

  toggleOpen(): void {
    this.open = !this.open;
  }

  addTodo(): void {
    const val = this.newTodo.trim();
    if (!val) return;
    this.todos.push({ text: val, done: false });
    this.newTodo = '';
  }

  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }
}
