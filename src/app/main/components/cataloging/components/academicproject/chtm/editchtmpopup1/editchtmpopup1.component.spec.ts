import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChtmPopup1Component } from './editchtmpopup1.component';

describe('EditChtmPopup1Component', () => {
  let component: EditChtmPopup1Component;
  let fixture: ComponentFixture<EditChtmPopup1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditChtmPopup1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditChtmPopup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
