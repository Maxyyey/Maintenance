import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditceasmodalComponent } from './editceasmodal.component';

describe('EditceasmodalComponent', () => {
  let component: EditceasmodalComponent;
  let fixture: ComponentFixture<EditceasmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditceasmodalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditceasmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
