import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcbapopupComponent } from './editcbapopup.component';

describe('EditcbapopupComponent', () => {
  let component: EditcbapopupComponent;
  let fixture: ComponentFixture<EditcbapopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditcbapopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditcbapopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
