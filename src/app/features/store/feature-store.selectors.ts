import { FEATURE_KEY } from '../../shared/constants/store.constants';
import { IFeatureState } from '../states/feature-state';
import { categoryAdapter } from '../pages/category/models/category.model';
import { ListItemAdapter } from '../pages/list/models/pending-list-items';
import { AllListItemsAdapter } from '../pages/list/models/all-list-item';

import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';


const featureKey = FEATURE_KEY.Feature;

export const selectFeature = createFeatureSelector<any, IFeatureState>(featureKey);

export const selectDashboard = createSelector(selectFeature, (state: IFeatureState) => state?.dashboard);

export const selectTodaysDate = createSelector(selectFeature, (state: IFeatureState) => state?.dashboard?.todayDate);

export const selectAllListItemSelectedDate = createSelector(selectFeature, (state: IFeatureState) => state?.list?.allListItems?.selectedDate)


const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = categoryAdapter.getSelectors();

export const selectCategoryFeature = createSelector(selectFeature, (state: IFeatureState) => state?.category);

export const selectAllCategoryEntities = createSelector(
  selectCategoryFeature,
  selectEntities
);

export const selectTotalCategories = createSelector(
  selectCategoryFeature,
  selectTotal
);

export const selectAllCategories = createSelector(
  selectCategoryFeature,
  selectAll
);

export const selectCategoriesIds = createSelector(
  selectCategoryFeature,
  selectIds
);


export const selectPendingListItemsFeature = createSelector(selectFeature, (state: IFeatureState) => state?.list.pendingCheckList);

export const selectPendingListEntities = createSelector(
  selectPendingListItemsFeature,
  ListItemAdapter.getSelectors().selectEntities
);

export const selectPendingListArray = createSelector(
  selectPendingListItemsFeature,
  ListItemAdapter.getSelectors().selectAll
);

export const selectPendingListIds = createSelector(
  selectPendingListItemsFeature,
  ListItemAdapter.getSelectors().selectIds
);


export const selectAllListItemsFeature = createSelector(selectFeature, (state: IFeatureState) => state?.list.allListItems);

export const selectAllListItems = createSelector(
  selectAllListItemsFeature,
  AllListItemsAdapter.getSelectors().selectEntities
)

export const selectAllListItemsAsArray = createSelector(
  selectAllListItemsFeature,
  AllListItemsAdapter.getSelectors().selectAll
)

export const selectAllListItemsIds = createSelector(
  selectAllListItemsFeature,
  AllListItemsAdapter.getSelectors().selectIds
)

