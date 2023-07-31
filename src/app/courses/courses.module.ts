import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CoursesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    TranslateModule
  ],
})
export class CoursesModule {}
