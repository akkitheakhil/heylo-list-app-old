import { ThemeConstants } from '../../../constants/theme.constants';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-google-icons',
  templateUrl: './google-icons.component.svg',
})
export class GoogleIconsComponent implements OnInit {

  themeConst = new ThemeConstants();
  @Input() color: string = this.themeConst.AppColor["text-primary"];
  constructor() { }

  ngOnInit(): void {
  }

}
