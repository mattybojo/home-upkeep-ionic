import { canActivate } from '@angular/fire/auth-guard';
import { Routes } from '@angular/router';
import { redirectUnauthorizedToLogin } from './auth/auth.helpers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then(m => m.routes)
  },
];
