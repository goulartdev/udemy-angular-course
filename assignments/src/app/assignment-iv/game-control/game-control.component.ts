import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss'],
})
export class GameControlComponent implements OnInit {
  intervalId: NodeJS.Timeout | null = null;
  @Output() onNewNumber = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  start(): void {
    if (this.isRunning()) return;

    this.intervalId = setInterval(() => {
      this.emitNewNumber();
    }, 1000);
  }

  stop(): void {
    if (!this.isRunning()) return;

    clearInterval(this.intervalId!);
    this.intervalId = null;
  }

  emitNewNumber(): void {
    const newNumber = Math.trunc(Math.random() * 100000);
    this.onNewNumber.emit(newNumber);
  }

  isRunning(): boolean {
    return this.intervalId != null;
  }
}
