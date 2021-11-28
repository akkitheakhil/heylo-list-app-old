import { MetaState } from './meta-store.state';
import { ActionReducerMap } from "@ngrx/store";
import { routerReducer } from '@ngrx/router-store';

export const reducers: ActionReducerMap<MetaState> = {
  router: routerReducer
};
