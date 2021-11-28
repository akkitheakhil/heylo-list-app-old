import { IFeatureState } from '../states/feature-state';
import { createReducer } from '@ngrx/store';
import { on } from '@ngrx/store';
import * as FeatureActions from './feature-store.actions';
import { initialCategoryState, categoryAdapter } from '../pages/category/models/category.model';

import * as moment from 'moment';
import { initialListItemsState, ListItemAdapter } from '../pages/list/models/pending-list-items';
import { AllListItemsAdapter, initialAllListItemsState } from '../pages/list/models/all-list-item';

export const initialFeatureState: IFeatureState = {
  dashboard: {
    todayDate: moment().format("DD-MM-YYYY"),
    listStatus: {
      completed: 0,
      pending: 0,
      totalList: 0,
      hasError: false,
      isDataLoaded: false,
      isLoading: false,
    }
  },
  category: initialCategoryState,
  list: {
    pendingCheckList: {
      ...initialListItemsState,
      selectedDate: moment().format("DD-MM-YYYY"),
    },
    allListItems: {
      ...initialAllListItemsState,
      hasError: false,
      isDataLoaded: false,
      isLoading: false,
      selectedDate: moment().format("DD-MM-YYYY"),
    }
  }
}

export const reducer = createReducer(
  initialFeatureState,

  //#region DASHBOARD REDUCERS
  on(FeatureActions.fetchDashboardListStatus, (state) => ({
    ...state,
    dashboard: {
      ...state.dashboard,
      listStatus:
      {
        ...state.dashboard.listStatus,
        isLoading: true
      }
    }
  })),

  on(FeatureActions.dashboardListStatusSuccess, (state, { data }) => ({
    ...state,
    dashboard: {
      ...state.dashboard,
      listStatus: {
        completed: data.completed,
        pending: data.pending,
        totalList: data.totalList,
        hasError: false,
        isDataLoaded: true,
        isLoading: false
      }
    }
  })),

  on(FeatureActions.dashboardListStatusError, (state, { error }) => ({
    ...state,
    dashboard: {
      ...state.dashboard,
      listStatus: {
        completed: 0,
        pending: 0,
        totalList: 0,
        hasError: true,
        isDataLoaded: false,
        isLoading: false
      }
    }
  })),

  //#endregion DASHBOARD REDUCERS

  //#region CATEGORY REDUCERS

  on(FeatureActions.fetchCategoryList, (state) => ({
    ...state,
    category: {
      ...state.category,
      isLoading: true,
      hasError: false,
      isDataLoaded: false,
    }
  })),

  on(FeatureActions.categoryListSuccess, (state, { data }) => ({
    ...state,
    category: {
      ...categoryAdapter.setAll(data, state.category),
      isLoading: false,
      hasError: false,
      isDataLoaded: true,
    }
  })),

  on(FeatureActions.categoryListError, (state, { error }) => ({
    ...state,
    category: {
      ...state.category,
      isLoading: false,
      hasError: true,
      isDataLoaded: false,
    }
  })),

  //#endregion CATEGORY REDUCERS


  //#region LIST REDUCERS

  on(FeatureActions.fetchPendingListItems, (state) => ({
    ...state,
    list: {
      ...state.list,
      list: {
        ...state.list.pendingCheckList,
        isLoading: true,
        hasError: false,
        isDataLoaded: false,
      }
    }
  })),

  on(FeatureActions.pendingListItemsSuccess, (state, { data }) => ({
    ...state,
    list: {
      ...state.list,
      pendingCheckList: {
        ...ListItemAdapter.setAll(data.list, state.list.pendingCheckList),
        isLoading: false,
        hasError: false,
        isDataLoaded: true,
      }
    }
  })),

  on(FeatureActions.pendingListItemsError, (state, { error }) => ({
    ...state,
    list: {
      ...state.list,
      pendingCheckList: {
        ...state.list.pendingCheckList,
        isLoading: false,
        hasError: true,
        isDataLoaded: false,
      }
    }
  })),

  on(FeatureActions.setUpdatePendingListCheckbox, (state, { data }) => ({
    ...state,
    list: {
      ...state.list,
      pendingCheckList: ListItemAdapter.updateOne(data, state.list.pendingCheckList),
    }
  })),

  on(FeatureActions.fetchAllListItems, (state) => ({
    ...state,
    list: {
      ...state.list,
      allListItems: {
        ...state.list.allListItems,
        selectedDate: moment().format("DD-MM-YYYY"),
        isDataLoaded: false,
        isLoading: true,
        hasError: false
      }
    }
  })),

  on(FeatureActions.allListItemsSuccess, (state, { data }) => ({
    ...state,
    list: {
      ...state.list,
      allListItems: {
        ...AllListItemsAdapter.setAll(data, state.list.allListItems),
        isDataLoaded: true,
        isLoading: false,
        hasError: false
      }
    }
  })),

  on(FeatureActions.allListItemsError, (state, { error }) => ({
    ...state,
    list: {
      ...state.list,
      allListItems: {
        ...state.list.allListItems,
        isDataLoaded: false,
        isLoading: false,
        hasError: true
      }
    }
  })),

  on(FeatureActions.updateAllListItemsSelectedDate, (state, { data }) => ({
    ...state,
    list: {
      ...state.list,
      allListItems: {
        ...state.list.allListItems,
        selectedDate: data
      }
    }
  })),

)
