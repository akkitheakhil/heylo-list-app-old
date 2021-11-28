import { ICoreState } from '../models/core-state.model';
import { on } from '@ngrx/store';
import { createReducer } from '@ngrx/store';
import * as CoreActions from './core-store.actions';

export const initialCoreState: ICoreState = {
  auth: {
    email: "",
    displayName: "",
    id: "",
    photoUrl: "",
    isAuthenticated: false,
    isLoading: false
  }
}

export const reducer = createReducer(
  initialCoreState,

  on(CoreActions.loginUserWithGoogle, (state) => ({
    ...state,
    auth: { ...state.auth, isLoading: true }
  })),

  on(CoreActions.fetchAuthInfo, (state) => ({
    ...state,
    auth: { ...state.auth, isLoading: true }
  })),

  on(CoreActions.setAuthInfoSuccess, (state, { data }) => ({
    ...state,
    auth: {
      ...state.auth,
      id: data.uid,
      displayName: data.displayName,
      email: data.email,
      isAuthenticated: true,
      isLoading: false,
      photoUrl: data.photoUrl
    }
  })),

  on(CoreActions.setAuthInfoError, (state, { error }) => ({
    ...state,
    auth: { ...initialCoreState.auth }
  })),

  on(CoreActions.loginUserWithGoogleSuccess, (state, { data }) => ({
    ...state,
    auth: {
      ...state.auth,
      id: data.uid,
      displayName: data.displayName,
      email: data.email,
      isAuthenticated: true,
      isLoading: false,
      photoUrl: data?.photoUrl
    }
  })),

  on(CoreActions.loginUserWithGoogleError, (state, { error }) => ({
    ...state,
    auth: { ...initialCoreState.auth }
  })),

  on(CoreActions.logoutUser, (state) => ({
    ...state,
    auth: { ...state.auth, isLoading: true }
  })),


  on(CoreActions.logoutUserSuccess, (state, { data }) => ({
    ...state,
    auth: { ...initialCoreState.auth, isLoading: false }
  })),


)


