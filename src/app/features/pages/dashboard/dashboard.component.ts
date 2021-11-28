import { DashboardFacadeService } from './services/dashboard-facade.service';
import { ListItem } from '../list/models/pending-list-items';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  _userFirstName$ = this.facadeService.userFirstName$;
  _listStatus$ = this.facadeService.listStatus$;
  _categoriesEntity$ = this.facadeService.categoryEntities$;
  _pendingListEntities$ = this.facadeService.pendingListEntity$;

  constructor(private facadeService: DashboardFacadeService) { }

  ngOnInit(): void {
    this.facadeService.dashboardInitData();
  }

  handleCheckboxClick(list: ListItem) {
    this.facadeService.updateListCheckbox = list;
  }

}
