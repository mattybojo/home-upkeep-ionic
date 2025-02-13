import { canActivate } from '@angular/fire/auth-guard';
import { Route } from '@angular/router';
import { redirectUnauthorizedToLogin } from '../auth/auth.helpers';
import { TaskListPage } from './task-list/task-list.page';

export const routes: Route[] = [{
  path: '', component: TaskListPage, ...canActivate(redirectUnauthorizedToLogin)
}];
