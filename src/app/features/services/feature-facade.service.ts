import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import * as FeatureActions from '../store/feature-store.actions';
import * as FeatureSelectors from '../store/feature-store.selectors';
import { ListItem } from '../pages/list/models/pending-list-items';
import { Update } from '@ngrx/entity';
import * as MetaSelectors from '../../store/meta-store.selector';
@Injectable({
  providedIn: 'root'
})
export class FeatureFacadeService {

  constructor(private store: Store<any>) { }

  fetchDashboardListStatus() {
    this.store.dispatch(FeatureActions.fetchDashboardListStatus());
  }

  get dashboardListStatus() {
    return this.store.select(FeatureSelectors.selectDashboard);
  }

  dashboardInit() {
    this.store.dispatch(FeatureActions.dashboardInit());
  }

  get categoriesEntities() {
    return this.store.select(FeatureSelectors.selectAllCategoryEntities);
  }

  get allCategories() {
    return this.store.select(FeatureSelectors.selectAllCategoryEntities);
  }

  get pendingListData() {
    return this.store.select(FeatureSelectors.selectPendingListArray);
  }

  get pendingListEntities() {
    return this.store.select(FeatureSelectors.selectPendingListEntities);
  }

  set updateListCheckboxItem(list: ListItem) {
    const lisItemUpdate: Update<ListItem> = {
      id: list.id,
      changes: list
    };
    this.store.dispatch(FeatureActions.setUpdatePendingListCheckbox({ data: lisItemUpdate }))
    this.updateListItem(list);
  }

  updateListItem(list: ListItem) {
    const data = { id: list.id, categoryId: list.categoryId };
    this.store.dispatch(FeatureActions.updatePendingListCheckbox({ data }));
  }


  get routeStateInfo() {
    return this.store.select(MetaSelectors.getCurrentRouteState)
  }

  loadCategoryInit() {
    this.store.dispatch(FeatureActions.categoryInit());
  }

  loadListInit() {
    this.store.dispatch(FeatureActions.listInit());
  }

  get allListItemEntities() {
    return this.store.select(FeatureSelectors.selectAllListItems);
  }

  set allListItemsSelectedDate(selectedDate: string) {
    this.store.dispatch(FeatureActions.updateAllListItemsSelectedDate({ data: selectedDate }));
  }
}
