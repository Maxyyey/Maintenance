import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editchtmpopup1Component } from './editchtmpopup1.component';

describe('Editchtmpopup1Component', () => {
  let component: Editchtmpopup1Component;
  let fixture: ComponentFixture<Editchtmpopup1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Editchtmpopup1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Editchtmpopup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
