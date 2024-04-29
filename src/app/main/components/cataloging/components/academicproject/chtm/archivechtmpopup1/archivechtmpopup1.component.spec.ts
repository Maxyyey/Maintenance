import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Archivechtmpopup1Component } from './archivechtmpopup1.component';

describe('Archivechtmpopup1Component', () => {
  let component: Archivechtmpopup1Component;
  let fixture: ComponentFixture<Archivechtmpopup1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Archivechtmpopup1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Archivechtmpopup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
