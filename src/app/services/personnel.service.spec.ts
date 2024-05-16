import { TestBed } from '@angular/core/testing';

import { PersonnelService } from './personnel.service';

describe('PersonnelService', () => {
  let service: PersonnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonnelService);
  });

  it('should be created', () => {
    // Test changes
    expect(service).toBeTruthy();
  });
});

//up
