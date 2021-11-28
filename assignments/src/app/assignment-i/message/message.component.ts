import { Component, Input, OnInit } from '@angular/core';

export enum MessageType {
  error = 'error',
  warning = 'warning',
  success = 'success',
  info = 'info',
  generic = 'generic',
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() type: MessageType = MessageType.generic;

  constructor() {}

  ngOnInit(): void {}
}
