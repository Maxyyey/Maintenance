import { TestBed } from '@angular/core/testing';
import { LockerService } from './locker.service';

describe('LockerApiService', () => {
  let service: LockerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LockerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
