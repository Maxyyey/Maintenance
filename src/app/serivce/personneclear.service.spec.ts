import { TestBed } from '@angular/core/testing';

import { PersonneclearService } from './personneclear.service';

describe('PersonneclearService', () => {
  let service: PersonneclearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonneclearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
