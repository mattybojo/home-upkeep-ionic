import { effect, inject, Injectable, untracked } from '@angular/core';
import { Auth, authState, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { AuthStore } from './auth.store';
import { or, QueryCompositeFilterConstraint, QueryFieldFilterConstraint, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // DI
  private auth = inject(Auth);
  readonly authStore = inject(AuthStore);
  private router = inject(Router);

  constructor() { }

  initAuthListener() {
    authState(this.auth).subscribe(user => {
      if (user) {
        this.authStore.setIsLoggedIn(true, user);
      } else {
        this.authStore.setIsLoggedIn(false, null);
      }
    });
  }

  signIn(): void {
    let provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    signInWithPopup(this.auth, provider).then(() => {
      this.router.navigate(['/']);
    }).catch(err => console.log(err));
  }

  signOut(): Observable<boolean> {
    return from(this.auth.signOut().then(() => this.router.navigate(['/auth/login'])));
  }
}
