import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcbaComponent } from './viewcba.component';

describe('ViewcbaComponent', () => {
  let component: ViewcbaComponent;
  let fixture: ComponentFixture<ViewcbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewcbaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewcbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
