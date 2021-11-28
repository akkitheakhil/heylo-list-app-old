import { FEATURE_KEY } from '../../shared/constants/store.constants';
import { ICoreState } from '../models/core-state.model';
import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';

const featureKey = FEATURE_KEY.Core;
export const selectCoreFeature = createFeatureSelector<any, ICoreState>(featureKey);

export const selectAuthInfo = createSelector(selectCoreFeature, (state: ICoreState) => state?.auth);
