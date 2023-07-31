import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { UserDashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DashboardCoursesComponent } from './dashboard-courses/dashboard-courses.component';
import { DashboardTestsComponent } from './dashboard-tests/dashboard-tests.component';
import { DashboardOpenCoursesComponent } from './dashboard-open-courses/dashboard-open-courses.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardCoursesComponent,
    DashboardTestsComponent,
    DashboardOpenCoursesComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    UserDashboardRoutingModule,
    SharedModule,
    AngularEditorModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class UserDashboardModule { }
