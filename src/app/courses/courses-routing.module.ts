import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  { path: '', redirectTo: 'lists', pathMatch: 'full' },
  { path: 'lists', component: CoursesComponent },
  { path: 'add-course', component: CoursesComponent },
  { path: 'edit-course/:id', component: CoursesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes), TranslateModule],
  exports: [RouterModule]
})

export class CoursesRoutingModule {
  //
}
