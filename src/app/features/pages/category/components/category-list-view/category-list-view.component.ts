import { Category } from '../../models/category.model';
import { Component, Input, OnInit } from '@angular/core';
import { Dictionary } from '@ngrx/entity';

@Component({
  selector: 'heylo-category-list-view',
  templateUrl: './category-list-view.component.html',
  styleUrls: ['./category-list-view.component.scss']
})
export class CategoryListViewComponent implements OnInit {

  @Input() categoryList!: Dictionary<Category>;
  @Input() showLoader: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  trackById(list: any) {
    return list.id;
  }

}
