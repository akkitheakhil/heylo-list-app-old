import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent implements OnInit {

  constructor() { }

  @Input() label!: string;
  @Input() height: string = "48px";
  @Input() width: string = "100%";

  ngOnInit(): void {
  }

}
