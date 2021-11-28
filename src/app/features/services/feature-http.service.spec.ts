import { TestBed } from '@angular/core/testing';

import { FeatureHttpService } from './feature-http.service';

describe('FeatureHttpService', () => {
  let service: FeatureHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
