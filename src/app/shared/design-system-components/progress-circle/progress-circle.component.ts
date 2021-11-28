import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss']
})
export class ProgressCircleComponent implements OnInit {


  @Input() percentage: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
