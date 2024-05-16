import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChtmComponent } from './viewchtm.component';

describe('ViewChtmComponent', () => {
  let component: ViewChtmComponent;
  let fixture: ComponentFixture<ViewChtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewChtmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewChtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
