import { PendingListItems, ListItem } from '../../../list/models/pending-list-items';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Dictionary } from '@ngrx/entity';

@Component({
  selector: 'heylo-todays-list',
  templateUrl: './todays-list.component.html',
  styleUrls: ['./todays-list.component.scss']
})
export class TodaysListComponent implements OnInit {

  @Input()
  listData!: Dictionary<ListItem>;
  @Input() showLoader: boolean = false;
  @Output() checkboxClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleCheckboxClick(list: any) {
    const updatedCheckbox = { ...list, value: !list.value };
    this.checkboxClick.emit(updatedCheckbox);
  }


  trackById(list: any): string {
    return list.id;
  }
}
