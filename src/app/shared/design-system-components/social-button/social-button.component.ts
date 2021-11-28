import { AppConstants } from '../../constants/app.constants';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.scss']
})
export class SocialButtonComponent implements OnInit {

  appConst = new AppConstants();
  @Input() icon: string = this.appConst.appIcons.google;
  @Input() iconColor: String = "";

  appIcons = this.appConst.appIcons;
  constructor() { }

  ngOnInit(): void {
  }

}
