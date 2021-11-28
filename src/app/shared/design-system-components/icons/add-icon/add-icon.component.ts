import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-add-icon',
  templateUrl: './add-icon.component.svg',
  styles: [
  ]
})
export class AddIconComponent implements OnInit {

  @Input() height = "24px";
  constructor() { }

  ngOnInit(): void {
  }

}
