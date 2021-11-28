import { CategoryFacadeService } from './services/category-facade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  _categoriesEntity$ = this.facadeService.categoryList$;

  showBottomSheet = false;

  constructor(private facadeService: CategoryFacadeService
  ) { }

  ngOnInit(): void {
    this.facadeService.loadCategoryInit();
  }

  handleAddCategory() {
    this.showBottomSheet = true;
  }

  handleDidClose() {
    this.showBottomSheet = false;
  }
}
