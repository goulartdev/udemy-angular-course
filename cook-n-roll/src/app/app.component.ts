import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentPage: string = 'recipes';

  navigateTo(pageName: string) {
    this.currentPage = pageName;
  }
}
