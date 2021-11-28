import { DashboardListInfo } from '../pages/dashboard/models/list-status.model';
import { CommonStateProperties } from '../../shared/models/common-state-properties';
import { CategoryState } from '../pages/category/models/category.model';
import { ListItemState } from '../pages/list/models/pending-list-items';
import { AllListItemsState } from '../pages/list/models/all-list-item';

interface listStatusState extends DashboardListInfo, CommonStateProperties { };

export interface IFeatureState {
  dashboard: {
    todayDate: string,
    listStatus: listStatusState
  },
  category: CategoryState,
  list: {
    pendingCheckList: ListItemState;
    allListItems: AllListItemsState;
  }
}
