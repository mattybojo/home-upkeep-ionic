import { User } from '@angular/fire/auth';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type AuthState = {
  user: User | null,
  isLoggedIn: boolean
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    setIsLoggedIn(isLoggedIn: boolean, user: User | null): void {
      patchState(store, { isLoggedIn, user });
    }
  }))
);
