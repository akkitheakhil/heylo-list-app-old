import { FeatureFacadeService } from '../../../services/feature-facade.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Category } from '../../category/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ListFacadeService {

  constructor(private featureFacade: FeatureFacadeService) { }

  loadFeatureInit() {
    this.featureFacade.loadListInit();
  }

  get allListItems$() {
    return this.featureFacade.allListItemEntities;
  }

  get categoryDropDown() {
    return this.featureFacade.categoriesEntities.pipe(map(category => {
      return Object.values(category) as Category[]
    }),
      map((data) => {
        return data.map((item) => {
          return {
            label: item?.name || "",
            value: item?.id || "",
            subtitle: ""
          }
        })
      })
    )
  }
}
