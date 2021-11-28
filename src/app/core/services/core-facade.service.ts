import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CoreActions from '../store/core-store.actions';

import * as CoreSelectors from '../store/core-store.selectors';
import { IAuth } from '../models/auth.model';
import { isEmptyData } from '../../shared/utils/common.utils';

@Injectable({
  providedIn: 'root'
})
export class CoreFacadeService {

  constructor(private store: Store<any>) { }

  callLoginWithFirebase() {
    this.store.dispatch(CoreActions.loginUserWithGoogle());
  }

  getUserAuthInfo() {
    this.store.dispatch(CoreActions.fetchAuthInfo());
  }

  getCurrentUserInfo() {
    return this.store.select(CoreSelectors.selectAuthInfo);
  }

  isValidUser(user: IAuth) {
    console.log(user);
    return !isEmptyData(user?.id);
  }

  logoutUser() {
    this.store.dispatch(CoreActions.logoutUser());
  }

}
