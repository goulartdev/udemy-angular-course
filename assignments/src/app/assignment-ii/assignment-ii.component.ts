import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-ii',
  templateUrl: './assignment-ii.component.html',
  styleUrls: ['./assignment-ii.component.scss'],
})
export class AssignmentIIComponent implements OnInit {
  username: string = 'djonathan';

  constructor() {}

  ngOnInit(): void {}

  clear(): void {
    this.username = '';
  }
}
