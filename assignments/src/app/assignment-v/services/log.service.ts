import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LogService {
  activations: number = 0;
  inactivations: number = 0;

  incActivations() {
    this.activations++;
    console.log(`[Activations] ${this.activations}`);
  }

  incInactivations() {
    this.inactivations++;
    console.log(`[Inactivations] ${this.inactivations}`);
  }
}
