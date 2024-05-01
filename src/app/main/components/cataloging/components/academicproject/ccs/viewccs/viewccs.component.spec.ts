import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCcsComponent } from './viewccs.component';

describe('ViewCcsComponent', () => {
  let component: ViewCcsComponent;
  let fixture: ComponentFixture<ViewCcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewCcsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
