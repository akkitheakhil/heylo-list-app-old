import { Output } from '@angular/core';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent implements OnInit {

  selectedItem!: { label: string; value: string | number; subTitle?: string }
  isDropDownVisible: boolean = false;

  @Input() showDefault: boolean = false;
  @Input() default!: { label: string; value: string | number; subTitle?: string };
  @Input() dropDownList!: { label: string; value: string | number; subTitle?: string }[] | null;
  @Output() selectionChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.selectedItem = this.default;
  }


  handleSelectClick(option: { label: string; value: string | number; subTitle?: string }) {
    this.selectedItem = option;
    this.handleDropdown();
    this.selectionChange.emit(option);
  }

  handleDropdown() {
    this.isDropDownVisible = !this.isDropDownVisible;
  }

}
