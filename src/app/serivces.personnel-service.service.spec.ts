import { TestBed } from '@angular/core/testing';

import { SerivcesPersonnelServiceService } from './serivces.personnel-service.service';

describe('SerivcesPersonnelServiceService', () => {
  let service: SerivcesPersonnelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerivcesPersonnelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
