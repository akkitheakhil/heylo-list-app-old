

import { Dictionary } from '@ngrx/entity';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Category } from '../../../category/models/category.model';

@Component({
  selector: 'heylo-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  @Input() categoryList!: Dictionary<Category>;
  @Input() showLoader: boolean = false;
  constructor() { }

  ngOnInit(): void {

  }


  trackById(list: any) {
    return list.id;
  }

}
