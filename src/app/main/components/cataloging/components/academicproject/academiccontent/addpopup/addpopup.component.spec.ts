import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPopupComponent } from './addpopup.component';

describe('AddPopupComponent', () => {
  let component: AddPopupComponent;
  let fixture: ComponentFixture<AddPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
