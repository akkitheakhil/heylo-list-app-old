import { AppConstants } from '../../../shared/constants/app.constants';
import { CoreFacadeService } from '../../services/core-facade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  appConst = new AppConstants();
  appIcons = this.appConst.appIcons;
  constructor(private facadeService: CoreFacadeService) { }

  ngOnInit(): void {
  }

  loginWithGoogle() {
    this.facadeService.callLoginWithFirebase();
  }

}
