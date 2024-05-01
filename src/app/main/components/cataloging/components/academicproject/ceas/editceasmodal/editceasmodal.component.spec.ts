import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCeasModalComponent } from './editceasmodal.component';

describe('EditCeasModalComponent', () => {
  let component: EditCeasModalComponent;
  let fixture: ComponentFixture<EditCeasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCeasModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCeasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
