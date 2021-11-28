import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-iii',
  templateUrl: './assignment-iii.component.html',
  styleUrls: ['./assignment-iii.component.scss'],
})
export class AssignmentIIIComponent implements OnInit {
  shouldShow: boolean = false;
  logs: {
    action: string;
    when: Date;
  }[] = [];

  constructor() {}

  ngOnInit(): void {}

  toggleVisibility() {
    this.shouldShow = !this.shouldShow;
    this.logAction();
  }

  logAction() {
    const newLog = {
      action: this.shouldShow ? 'show' : 'hide',
      when: new Date(),
    };

    this.logs = [newLog, ...this.logs];
  }
}
