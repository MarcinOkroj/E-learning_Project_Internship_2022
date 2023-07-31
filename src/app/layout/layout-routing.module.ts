import { NoPermissionComponent } from './../shared/no-permission/no-permission.component';
import { NotFoundComponent } from './../shared/not-found/not-found.component';
import { Component } from '@angular/core';
import { CompaniesGuard } from './../core/guards/companies.guard';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { LayoutComponent } from './layout.component';
import { UsersGuard } from '../core/guards/users.guard';
import { DashboardGuard } from '../core/guards/dashboard.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('../users/users.module').then((m) => m.UsersModule),
        canActivate: [UsersGuard],
      },
      {
        path: 'companies',
        loadChildren: () =>
          import('../companies/companies.module').then(
            (m) => m.CompaniesModule
          ),
        canActivate: [CompaniesGuard],
      },
      {
        path: 'courses',
        loadChildren: () =>
          import('../courses/courses.module').then((m) => m.CoursesModule),
        canActivate: [CompaniesGuard],
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.UserDashboardModule),
        canActivate: [DashboardGuard]
      },
      {
        path: 'no-permission',
        component: NoPermissionComponent,
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      { path: '', redirectTo: 'not-found', pathMatch: 'full' },
      { path: '**', redirectTo: '/app/not-found' },
      { path: 'not-found', component: NotFoundComponent },
    ],
  },
];

export const LayoutRoutingModule = RouterModule.forChild(routes);
