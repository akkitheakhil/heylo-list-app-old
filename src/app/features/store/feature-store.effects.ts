import { createEffect } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as FeatureActions from './feature-store.actions';
import { ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, switchMap, withLatestFrom } from 'rxjs/operators';
import { FeatureHttpService } from '../services/feature-http.service';
import { of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import * as FeatureSelectors from '../store/feature-store.selectors';

@Injectable()
export class FeatureStoreEffect {

  private _dashboardTodaysDate$ = this.store.select(FeatureSelectors.selectTodaysDate);

  private _AllListItemSelectedDate$ = this.store.select(FeatureSelectors.selectAllListItemSelectedDate)

  dashboardInit$ = createEffect((): any => this.actions$.pipe(
    ofType(FeatureActions.dashboardInit),
    mergeMap(() => [
      FeatureActions.fetchDashboardListStatus(),
      FeatureActions.fetchCategoryList(),
      FeatureActions.fetchPendingListItemsForDashboard()
    ])
  ));

  categoryInit$ = createEffect((): any => this.actions$.pipe(
    ofType(FeatureActions.categoryInit),
    mergeMap(() => [
      FeatureActions.fetchCategoryList(),
    ])
  ));


  listPageInit$ = createEffect((): any => this.actions$.pipe(
    ofType(FeatureActions.listInit),
    mergeMap(() => [
      FeatureActions.fetchAllListItems(),
    ])
  ));

  loadDashboardListStatus$ = createEffect((): any => this.actions$.pipe(
    ofType(FeatureActions.fetchDashboardListStatus),
    switchMap(() => {
      return this.httpService.getDashboardListStatus()
    }),
    map((data) => {
      return FeatureActions.dashboardListStatusSuccess({ data })
    }),
    catchError(error => of(FeatureActions.dashboardListStatusError({ error })))
  ));

  loadCategoriesList$ = createEffect((): any => this.actions$.pipe(
    ofType(FeatureActions.fetchCategoryList),
    switchMap(() => {
      return this.httpService.getCommonCategoriesList()
    }),
    map((data) => {
      return FeatureActions.categoryListSuccess({ data })
    }),
    catchError(error => of(FeatureActions.categoryListError({ error })))
  ));


  loadPendingListDashboard$ = createEffect((): any => this.actions$.pipe(
    ofType(FeatureActions.fetchPendingListItemsForDashboard),
    withLatestFrom(this._dashboardTodaysDate$),
    switchMap((data: [Action, string]) => {
      return this.httpService.getPendingListItems(data[1])
    }),
    map((data) => {
      return FeatureActions.pendingListItemsSuccess({ data })
    }),
    catchError(error => of(FeatureActions.pendingListItemsError({ error })))
  ));

  updatePendingList$ = createEffect((): any => this.actions$.pipe(
    ofType(FeatureActions.updatePendingListCheckbox),
    switchMap(({ data }) => {
      return this.httpService.updateListItems(data);
    }),
    map((data) => {
      return FeatureActions.pendingListItemsSuccess({ data })
    }),
    catchError(error => of(FeatureActions.pendingListItemsError({ error })))
  ));

  loadAllListItems$ = createEffect((): any => this.actions$.pipe(
    ofType(FeatureActions.fetchAllListItems),
    withLatestFrom(this._AllListItemSelectedDate$),
    switchMap((data: [Action, string]) => {
      return this.httpService.getAllListItems(data[1])
    }),
    map((data) => {
      return FeatureActions.allListItemsSuccess({ data })
    }),
    catchError(error => of(FeatureActions.allListItemsError({ error })))
  ));

  constructor(private actions$: Actions, private httpService: FeatureHttpService, private store: Store<any>) { }
}
