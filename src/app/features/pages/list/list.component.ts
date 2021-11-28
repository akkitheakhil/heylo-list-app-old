import { ListFacadeService } from './services/list-facade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  allListItems$ = this.facade.allListItems$;
  categoryDropdown$ = this.facade.categoryDropDown;
  defaultDropdown = { label: "View All", value: "all category" };

  constructor(private facade: ListFacadeService) { }

  ngOnInit(): void {
    this.facade.loadFeatureInit();
  }

}
