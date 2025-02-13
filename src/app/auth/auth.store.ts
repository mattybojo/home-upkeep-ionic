import { User } from '@angular/fire/auth';
import { or, QueryCompositeFilterConstraint, QueryFieldFilterConstraint, where } from '@angular/fire/firestore';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type AuthState = {
  user: User | null;
  isLoggedIn: boolean;
  whereCurrentUserIsOwner: QueryFieldFilterConstraint | undefined;
  whereSharedWithCurrentUser: QueryFieldFilterConstraint | undefined;
  whereCurrentUserIsAllowed: QueryCompositeFilterConstraint | undefined;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  whereCurrentUserIsOwner: undefined,
  whereSharedWithCurrentUser: undefined,
  whereCurrentUserIsAllowed: undefined
};

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    setIsLoggedIn(isLoggedIn: boolean, user: User | null): void {
      patchState(store, { isLoggedIn, user, whereCurrentUserIsOwner: where('uid', '==', user?.uid), whereSharedWithCurrentUser: where('sharedWith', 'array-contains', user?.uid), whereCurrentUserIsAllowed: or(where('uid', '==', user?.uid), where('sharedWith', 'array-contains', user?.uid)) });
    }
  }))
);
