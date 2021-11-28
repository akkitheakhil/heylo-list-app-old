import { FeatureFacadeService } from '../../../services/feature-facade.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryFacadeService {


  constructor(private featureFacade: FeatureFacadeService) { }

  get categoryList$() {
    return this.featureFacade.categoriesEntities;
  }

  loadCategoryInit() {
    this.featureFacade.loadCategoryInit();
  }
}
