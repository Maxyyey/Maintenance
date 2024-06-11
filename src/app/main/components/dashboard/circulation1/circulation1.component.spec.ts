import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Circulation1Component } from './circulation1.component';

describe('Circulation1Component', () => {
  let component: Circulation1Component;
  let fixture: ComponentFixture<Circulation1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Circulation1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Circulation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
