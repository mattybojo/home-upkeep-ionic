import { signalStoreFeature, withMethods, withState } from '@ngrx/signals';

export type LoadingState = {
  isLoading: boolean,
  isError: boolean,
  message: string
};

const initialState: LoadingState = {
  isLoading: false,
  isError: false,
  message: ''
};

export function withLoadingState() {
  return signalStoreFeature(
    withState(initialState),
    withMethods((store) => ({

    }))
  );
}

export function setIsLoading(): LoadingState {
  return { isLoading: true, isError: false, message: '' };
};

export function setCompleted(): LoadingState {
  return { isLoading: false, isError: false, message: '' };
};

export function setError(message: string): LoadingState {
  return { isLoading: false, isError: true, message };
}
