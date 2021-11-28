import { FeatureStoreEffect } from './feature-store.effects';
import { FEATURE_KEY } from '../../shared/constants/store.constants';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reducer as FeatureReducer } from '../store/feature-store.reducer';

const featureKey = FEATURE_KEY.Feature;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([FeatureStoreEffect]),
    StoreModule.forFeature(featureKey, FeatureReducer)
  ]
})
export class FeatureStoreModule { }
