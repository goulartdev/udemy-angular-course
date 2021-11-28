import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AssignmentIComponent, MessageComponent } from './assignment-i';
import { AssignmentIIComponent } from './assignment-ii';
import { AssignmentIIIComponent } from './assignment-iii';
import {
  AssignmentIVComponent,
  GameControlComponent,
  EvenComponent,
  OddComponent,
} from './assignment-iv';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentIComponent,
    MessageComponent,
    AssignmentIIComponent,
    AssignmentIIIComponent,
    AssignmentIVComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
  ],
  imports: [BrowserModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
