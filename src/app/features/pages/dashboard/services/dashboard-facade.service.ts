import { CoreFacadeService } from '../../../../core/services/core-facade.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IAuth } from '../../../../core/models/auth.model';
import { FeatureFacadeService } from '../../../services/feature-facade.service';
import { ListItem } from '../../list/models/pending-list-items';

@Injectable({
  providedIn: 'root'
})
export class DashboardFacadeService {

  constructor(private coreFacade: CoreFacadeService, private featureFacade: FeatureFacadeService) { }

  get userFirstName$() {
    return this.coreFacade.getCurrentUserInfo().pipe((map((user: IAuth) => {
      return user.displayName?.split(' ')?.slice(0, -1)?.join(' ') || "User";
    })))
  }

  get listStatus$() {
    return this.featureFacade.dashboardListStatus.pipe((map((data) => {
      return data.listStatus;
    })))
  }

  loadListStatusData() {
    this.featureFacade.fetchDashboardListStatus();
  }

  dashboardInitData() {
    this.featureFacade.dashboardInit();
  }

  get categoryEntities$() {
    return this.featureFacade.categoriesEntities;
  }

  get pendingListArray$() {
    return this.featureFacade.pendingListData;
  }

  get pendingListEntity$() {
    return this.featureFacade.pendingListEntities;
  }

  set updateListCheckbox(list: ListItem) {
    this.featureFacade.updateListCheckboxItem = list;
  }
}
