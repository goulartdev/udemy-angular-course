import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() onNavClick = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  navigateTo(pageName: string) {
    this.onNavClick.emit(pageName);
  }
}
