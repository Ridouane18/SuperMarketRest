import { TestBed } from '@angular/core/testing';

import { MarketServiceService } from './market-service.service';

describe('MarketServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarketServiceService = TestBed.get(MarketServiceService);
    expect(service).toBeTruthy();
  });
});
