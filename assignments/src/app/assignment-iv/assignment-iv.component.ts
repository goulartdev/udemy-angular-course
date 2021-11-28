import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-iv',
  templateUrl: './assignment-iv.component.html',
  styleUrls: ['./assignment-iv.component.scss'],
})
export class AssignmentIVComponent implements OnInit {
  numbers: number[] = [];

  constructor() {}

  ngOnInit(): void {}

  log(newNumber: any): void {
    this.numbers.push(newNumber);
  }
}
