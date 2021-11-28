import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeatureHttpService } from './services/feature-http.service';
import { FeatureStoreModule } from './store/feature-store.module';
import { FeatureFacadeService } from './services/feature-facade.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FeaturesComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    HttpClientModule,
    FeatureStoreModule
  ],
  providers: [FeatureHttpService, FeatureFacadeService]
})
export class FeaturesModule { }
