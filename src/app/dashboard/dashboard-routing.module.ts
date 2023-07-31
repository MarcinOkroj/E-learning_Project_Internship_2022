import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCoursesComponent } from './dashboard-courses/dashboard-courses.component';
import { DashboardOpenCoursesComponent } from './dashboard-open-courses/dashboard-open-courses.component';
import { DashboardTestsComponent } from './dashboard-tests/dashboard-tests.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'courses',
    component: DashboardCoursesComponent
  },
  {
    path: 'tests',
    component: DashboardTestsComponent
  },
  {
    path: 'open-courses',
    component: DashboardOpenCoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserDashboardRoutingModule {
}
