import { CoreStoreEffect } from './core-store.effects';
import { FEATURE_KEY } from '../../shared/constants/store.constants';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer as CoreReducer } from '../store/core-store.reducer';

const featureKey = FEATURE_KEY.Core;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([CoreStoreEffect]),
    StoreModule.forFeature(featureKey, CoreReducer)
  ]
})
export class CoreStoreModule { }
