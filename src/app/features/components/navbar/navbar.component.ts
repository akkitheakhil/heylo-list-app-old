import { AppConstants } from '../../../shared/constants/app.constants';
import { ThemeConstants } from '../../../shared/constants/theme.constants';
import { isEmptyData } from '../../../shared/utils/common.utils';
import { Router } from '@angular/router';
import { Input, OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {

  @Input() routerInfo!: any;
  @Input() userInfo!: any;

  themeConst = new ThemeConstants();
  appConstant = new AppConstants();

  primaryColor = this.themeConst.AppColor["primary"];
  bottomTabs = this.appConstant.bottomTabs;

  activeTab: {
    name: string;
    icon: string;
    isCenter?: boolean;
    url?: string,
    hasAction?: boolean
  } = this.appConstant.bottomTabs[0];

  prevTab!: {
    name: string;
    icon: string;
    isCenter?: boolean;
    url?: string,
    hasAction?: boolean
  };

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    const routUrl: string[] = this.routerInfo.url.split('/');
    this.appConstant.bottomTabs.some((tab) => {
      if (this.routerInfo.url.includes(tab.name)) {
        this.activeTab = tab;
      }
    })
  }

  tabController(selectedTab: {
    name: string;
    icon: string;
    isCenter?: boolean;
    url?: string,
    hasAction?: boolean
  }) {
    if (!isEmptyData(selectedTab.url)) {
      this.prevTab = this.activeTab;
      this.activeTab = selectedTab;
      const url = selectedTab.url || this.appConstant.appRoutes.dashboard;
      this.navigateWithRouter(url)
    }
  }

  navigateWithRouter(url: string) {
    this._router.navigate([url]);
  }

}
