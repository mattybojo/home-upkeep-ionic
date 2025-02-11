import { canActivate } from '@angular/fire/auth-guard';
import { Route } from '@angular/router';
import { redirectLoggedInToDashboard } from './auth.helpers';
import { LoginPage } from './login/login.page';

export const routes: Route[] = [{
  path: 'login', component: LoginPage, ...canActivate(redirectLoggedInToDashboard)
}];
