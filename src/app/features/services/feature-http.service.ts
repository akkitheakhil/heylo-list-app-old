import { HttpRoutesConstants } from '../../shared/constants/http-routes.constants';
import { DashboardListInfo } from '../pages/dashboard/models/list-status.model';
import { Category } from '../pages/category/models/category.model';
import { PendingListItems } from '../pages/list/models/pending-list-items';
import { CommonDateService } from '../../shared/services/common-date.service';
import { AllListItems } from '../pages/list/models/all-list-item';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureHttpService {

  private _baseUrl = '/';
  private _httpRouteConst = new HttpRoutesConstants();

  private _httpRoutes = this._httpRouteConst._heyloListEndPoints;
  constructor(private http: HttpClient, private dateService: CommonDateService) { }

  getDashboardListStatus() {
    const apiUrl = this._httpRoutes.dashboardGetListStatus.endpoint;
    return this.http.get<DashboardListInfo>(apiUrl);
  }

  getCommonCategoriesList() {
    const apiUrl = this._httpRoutes.commonGetCategoriesList.endpoint;
    return this.http.get<Category[]>(apiUrl);
  }

  getPendingListItems(date: string = this.dateService.getDefaultDate()) {
    const apiUrl = this._httpRoutes.listGetPendingList.endpoint;
    let params = new HttpParams();
    params = params.append("date", date);
    return this.http.get<PendingListItems>(apiUrl, { params });
  }

  updateListItems(updateItems: { id: string, categoryId: string }) {
    const apiUrl = this._httpRoutes.updateListItem.endpoint;
    return this.http.put<PendingListItems>(apiUrl, updateItems);
  }


  getAllListItems(date: string = this.dateService.getDefaultDate()) {
    const apiUrl = this._httpRoutes.getAllListItems.endpoint;
    let params = new HttpParams();
    params = params.append("date", date);
    return this.http.get<AllListItems[]>(apiUrl, { params });
  }

}
