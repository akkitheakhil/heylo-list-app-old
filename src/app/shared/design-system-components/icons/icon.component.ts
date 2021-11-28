import { ThemeConstants } from '../../constants/theme.constants';
import { AppConstants } from '../../constants/app.constants';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  @Input() icon!: string;
  @Input() height: string = "24px";
  @Input() primaryColor!: string;
  @Input() secondaryColor!: string;

  appConst = new AppConstants();
  appIcons = this.appConst.appIcons;

  constructor() { }

  ngOnInit(): void {
  }

}
