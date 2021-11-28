import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialButtonComponent } from './design-system-components/social-button/social-button.component';
import { GoogleIconsComponent } from './design-system-components/icons/google-icons/google-icons.component';
import { AppleIconComponent } from './design-system-components/icons/apple-icon/apple-icon.component';
import { PrimaryButtonComponent } from './design-system-components/primary-button/primary-button.component';
import { LoaderComponent } from './design-system-components/loader/loader.component';
import { HomeIconComponent } from './design-system-components/icons/home-icon/home-icon.component';
import { ProfileIconComponent } from './design-system-components/icons/profile-icon/profile-icon.component';
import { CategoryIconComponent } from './design-system-components/icons/category-icon/category-icon.component';
import { ListIconComponent } from './design-system-components/icons/list-icon/list-icon.component';
import { AddIconComponent } from './design-system-components/icons/add-icon/add-icon.component';
import { IconComponent } from './design-system-components/icons/icon.component';
import { IsEmptyPipe } from './utils/pipes/is-empty.pipe';
import { CheckboxComponent } from './design-system-components/checkbox/checkbox.component';
import { CheckIconComponent } from './design-system-components/icons/check-icon/check-icon.component';
import { CommonDateService } from './services/common-date.service';
import { BottomPopupModalComponent } from './design-system-components/bottom-popup-modal/bottom-popup-modal.component';
import { ProgressCircleComponent } from './design-system-components/progress-circle/progress-circle.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ThreeCardCalendarComponent } from './design-system-components/three-card-calendar/three-card-calendar.component';
import { CustomDatePipe } from './utils/pipes/custom-date.pipe';
import { ChevronLeftComponent } from './design-system-components/icons/chevron-left/chevron-left.component';
import { ChevronRightComponent } from './design-system-components/icons/chevron-right/chevron-right.component';
import { DropdownListComponent } from './design-system-components/dropdown-list/dropdown-list.component';
import { CaretDownComponent } from './design-system-components/icons/caret-down/caret-down.component';
import { DropdownCardComponent } from './design-system-components/dropdown-card/dropdown-card.component';

const components = [
  SocialButtonComponent,
  PrimaryButtonComponent,
  LoaderComponent,
  IconComponent,
  IsEmptyPipe,
  CheckboxComponent,
  BottomPopupModalComponent,
  ProgressCircleComponent,
  ThreeCardCalendarComponent,
  DropdownListComponent,
]

@NgModule({
  declarations: [
    ...components,
    GoogleIconsComponent,
    AppleIconComponent,
    HomeIconComponent,
    ProfileIconComponent,
    CategoryIconComponent,
    ListIconComponent,
    AddIconComponent,
    CheckIconComponent,
    CustomDatePipe,
    ChevronLeftComponent,
    ChevronRightComponent,
    CaretDownComponent,
    DropdownCardComponent,
  ],
  imports: [
    CommonModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      radius: 60,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  exports: [
    ...components
  ],
  providers: [CommonDateService]
})
export class SharedModule { }
