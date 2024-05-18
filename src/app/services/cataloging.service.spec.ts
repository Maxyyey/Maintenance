import { TestBed } from '@angular/core/testing';

import { CatalogingService } from './cataloging.service';

describe('CatalogingService', () => {
  let service: CatalogingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
