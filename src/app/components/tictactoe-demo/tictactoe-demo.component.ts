import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Cell = 'X' | 'O' | null;

const WIN_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

@Component({
  selector: 'app-tictactoe-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tictactoe-demo.component.html'
})
export class TictactoeDemoComponent {
  open = false;
  board: Cell[] = Array(9).fill(null);
  turn: 'X' | 'O' = 'X';
  result: string | null = null;

  toggleOpen(): void {
    this.open = !this.open;
  }

  get status(): string {
    return this.result ?? `Player ${this.turn}'s turn`;
  }

  move(index: number): void {
    if (this.board[index] || this.result) return;
    this.board[index] = this.turn;

    const winner = this.checkWinner();
    if (winner) {
      this.result = `${winner} wins!`;
    } else if (this.board.every((cell) => cell)) {
      this.result = "It's a draw.";
    } else {
      this.turn = this.turn === 'X' ? 'O' : 'X';
    }
  }

  reset(): void {
    this.board = Array(9).fill(null);
    this.turn = 'X';
    this.result = null;
  }

  private checkWinner(): Cell {
    for (const [a, b, c] of WIN_LINES) {
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        return this.board[a];
      }
    }
    return null;
  }
}
