import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCbaPopupComponent } from './editcbapopup.component';

describe('EditcbapopupComponent', () => {
  let component: EditCbaPopupComponent;
  let fixture: ComponentFixture<EditCbaPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCbaPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCbaPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
