import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { TodaysListComponent } from './components/todays-list/todays-list.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    CategoryListComponent,
    TodaysListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
