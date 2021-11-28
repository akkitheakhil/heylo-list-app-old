import { CoreFacadeService } from '../core/services/core-facade.service';
import { FeatureFacadeService } from './services/feature-facade.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heylo-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  routeInfo$ = this.facadeService.routeStateInfo;

  constructor(private coreFacadeService: CoreFacadeService, private facadeService: FeatureFacadeService) { }

  ngOnInit(): void {
  }

  logout() {
    this.coreFacadeService.logoutUser();
  }


}
