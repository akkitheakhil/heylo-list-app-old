import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  constructor() { }

  @Input() label!: string;
  @Input() isChecked!: boolean;
  ngOnInit(): void {
  }

}
