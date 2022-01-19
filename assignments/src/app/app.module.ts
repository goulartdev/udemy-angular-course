import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRountingModule } from './app-routing.module';
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
import { AssignmentVComponent, ActiveUsersComponent, InactiveUsersComponent } from './assignment-v';
import { AssignmentVIComponent } from './assignment-vi';
import { AssignmentVIIComponent } from './assignment-vii';
import { AssignmentVIIIComponent, Reverse, Sort } from './assignment-viii';

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
    AssignmentVComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    AssignmentVIComponent,
    AssignmentVIIComponent,
    AssignmentVIIIComponent,
    Reverse,
    Sort,
  ],
  imports: [
    AppRountingModule, 
    BrowserModule, 
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
