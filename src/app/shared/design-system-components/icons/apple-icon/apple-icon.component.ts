import { AppConstants } from '../../../constants/app.constants';
import { ThemeConstants } from '../../../constants/theme.constants';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-apple-icon',
  templateUrl: './apple-icon.component.svg',
})
export class AppleIconComponent implements OnInit {

  themeConst = new ThemeConstants();

  @Input() color: string = this.themeConst.AppColor["text-primary"];

  constructor() { }

  ngOnInit(): void {
  }

}
