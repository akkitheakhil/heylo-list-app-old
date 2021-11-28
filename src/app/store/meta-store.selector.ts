import { MetaState } from './meta-store.state';
import { createSelector } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

export const getRouterState = (state: MetaState) => state.router;

export const getCurrentRouteState = createSelector(
  getRouterState,
  (state: fromRouter.RouterReducerState) => state.state
);
