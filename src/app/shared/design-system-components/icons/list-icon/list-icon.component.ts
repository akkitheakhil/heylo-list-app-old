import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-list-icon',
  templateUrl: './list-icon.component.svg',
  styles: [
  ]
})
export class ListIconComponent implements OnInit {
  @Input() height = "24px";
  constructor() { }

  ngOnInit(): void {
  }

}
