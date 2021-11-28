import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-category-icon',
  templateUrl: './category-icon.component.svg',
  styles: [
  ]
})
export class CategoryIconComponent implements OnInit {

  @Input() height = "24px";
  constructor() { }

  ngOnInit(): void {
  }

}
