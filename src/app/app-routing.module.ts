import { NotFoundComponent } from './shared/not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';

const AppRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'app',
    loadChildren: () =>
      import('../app/layout/layout.module').then((m) => m.LayoutModule),
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

export const AppRoutingModule = RouterModule.forRoot(AppRoutes);
