import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPAC1Component } from './opac1.component';

describe('OPAC1Component', () => {
  let component: OPAC1Component;
  let fixture: ComponentFixture<OPAC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OPAC1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OPAC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
