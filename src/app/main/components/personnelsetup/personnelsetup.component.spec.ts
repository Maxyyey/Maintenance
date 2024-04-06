import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelSetupComponent } from './personnelsetup.component';

describe('PersonnelSetupComponent', () => {
  let component: PersonnelSetupComponent;
  let fixture: ComponentFixture<PersonnelSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonnelSetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonnelSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


