import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { SharedModule } from '../../../shared/shared.module';
import { CategoryListViewComponent } from './components/category-list-view/category-list-view.component';
import { AddCategorySheetComponent } from './components/add-category-sheet/add-category-sheet.component';


@NgModule({
  declarations: [
    CategoryComponent,
    CategoryListViewComponent,
    AddCategorySheetComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }
