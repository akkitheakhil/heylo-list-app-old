import { DashboardListInfo } from '../pages/dashboard/models/list-status.model';
import { Category } from '../pages/category/models/category.model';
import { PendingListItems, ListItem } from '../pages/list/models/pending-list-items';
import { AllListItems } from '../pages/list/models/all-list-item';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export const dashboardInit = createAction(
  '[APP] Load Dashboard Init'
);

export const fetchDashboardListStatus = createAction(
  '[APP] Get Dashboard List Status'
);

export const dashboardListStatusSuccess = createAction(
  '[APP] Get Dashboard List Status Success',
  props<{ data: DashboardListInfo }>()
);

export const dashboardListStatusError = createAction(
  '[APP] Get Dashboard List Status Fail',
  props<{ error: any }>()
);

export const fetchCategoryList = createAction(
  '[APP] Get Category List'
);

export const categoryListSuccess = createAction(
  '[APP] Get Category List Success',
  props<{ data: Category[] }>()
);

export const categoryListError = createAction(
  '[APP] Get Category List Error',
  props<{ error: any }>()
);

export const fetchPendingListItems = createAction(
  '[APP] Get Pending List Items'
);

export const fetchPendingListItemsForDashboard = createAction(
  '[APP] Get Pending List Items For Dashboard'
);

export const pendingListItemsSuccess = createAction(
  '[APP] Get Pending List Items Success',
  props<{ data: PendingListItems }>()
);

export const pendingListItemsError = createAction(
  '[APP] Get Pending List Items Error',
  props<{ error: any }>()
);

export const setTodayDate = createAction(
  '[APP] Set Todays Date'
);

export const setUpdatePendingListCheckbox = createAction(
  '[APP] Set Update Pending List Items',
  props<{ data: Update<ListItem> }>()
);

export const updatePendingListCheckbox = createAction(
  '[APP] Update Pending List Items',
  props<{ data: { id: string; categoryId: string } }>()
);

export const categoryInit = createAction(
  '[APP] Load Category Init'
);


export const listInit = createAction(
  '[APP] Load List Init'
);

export const fetchAllListItems = createAction(
  '[APP] Get All List Items'
);

export const allListItemsSuccess = createAction(
  '[APP] Get All List Items Success',
  props<{ data: AllListItems[] }>()
);

export const allListItemsError = createAction(
  '[APP] Get All List Items Error',
  props<{ error: any }>()
);

export const updateAllListItemsSelectedDate = createAction(
  '[APP] Update All List Items Selected Date',
  props<{ data: string }>()
);
