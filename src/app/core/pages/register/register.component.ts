import { AppConstants } from '../../../shared/constants/app.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  appConst = new AppConstants();
  appIcons = this.appConst.appIcons;
  constructor() { }

  ngOnInit(): void {
  }

}
