import { AppConstants } from '../../../constants/app.constants';
import { ThemeConstants } from '../../../constants/theme.constants';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-profile-icon',
  templateUrl: './profile-icon.component.svg',
  styles: [
  ]
})
export class ProfileIconComponent implements OnInit {

  themeConst = new ThemeConstants();
  @Input() height = "24px";
  @Input() primaryColor = this.themeConst.AppColor["text-primary"];
  @Input() secondaryColor = this.themeConst.AppColor["text-primary"];
  constructor() { }

  ngOnInit(): void {
  }

}
