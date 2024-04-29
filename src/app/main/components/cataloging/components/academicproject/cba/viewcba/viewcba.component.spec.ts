import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCbaComponent } from './viewcba.component';

describe('ViewcbaComponent', () => {
  let component: ViewCbaComponent;
  let fixture: ComponentFixture<ViewCbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewCbaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
