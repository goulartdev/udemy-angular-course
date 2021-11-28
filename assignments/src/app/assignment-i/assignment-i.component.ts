import { Component, OnInit } from '@angular/core';
import { MessageType } from './message/message.component';

@Component({
  selector: 'app-assignment-i',
  templateUrl: './assignment-i.component.html',
  styleUrls: ['./assignment-i.component.scss'],
})
export class AssignmentIComponent implements OnInit {
  messageType: MessageType = MessageType.generic;

  constructor() {}

  ngOnInit(): void {}

  setType(type: keyof typeof MessageType): void {
    this.messageType = MessageType[type] || MessageType.generic;
  }
}
