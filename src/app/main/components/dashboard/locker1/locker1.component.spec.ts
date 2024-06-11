import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Locker1Component } from './locker1.component';

describe('Locker1Component', () => {
  let component: Locker1Component;
  let fixture: ComponentFixture<Locker1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Locker1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Locker1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
