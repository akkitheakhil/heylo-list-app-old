import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-home-icon',
  templateUrl: './home-icon.component.svg',
  styles: [
  ]
})
export class HomeIconComponent implements OnInit {

  constructor() { }

  @Input() height = "24px";

  ngOnInit(): void {
  }

}
