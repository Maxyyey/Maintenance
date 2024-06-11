import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cataloging1Component } from './cataloging1.component';

describe('Cataloging1Component', () => {
  let component: Cataloging1Component;
  let fixture: ComponentFixture<Cataloging1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cataloging1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cataloging1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
