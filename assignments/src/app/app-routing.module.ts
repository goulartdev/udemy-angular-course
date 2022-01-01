import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssignmentIComponent } from './assignment-i';
import { AssignmentIIComponent } from './assignment-ii';
import { AssignmentIIIComponent } from './assignment-iii';
import { AssignmentIVComponent } from './assignment-iv';
import { AssignmentVComponent } from './assignment-v';
import { AssignmentVIComponent } from './assignment-vi';
import { AssignmentVIIComponent } from './assignment-vii';

const routes: Routes = [
  { path: 'assignment-i', component: AssignmentIComponent },
  { path: 'assignment-ii', component: AssignmentIIComponent },
  { path: 'assignment-iii', component: AssignmentIIIComponent },
  { path: 'assignment-iv', component: AssignmentIVComponent },
  { path: 'assignment-v', component: AssignmentVComponent },
  { path: 'assignment-vi', component: AssignmentVIComponent },
  { path: 'assignment-vii', component: AssignmentVIIComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule {}
