import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPeriodicalComponent } from './viewperiodical.component';

describe('ViewPeriodicalComponent', () => {
  let component: ViewPeriodicalComponent;
  let fixture: ComponentFixture<ViewPeriodicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewPeriodicalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewPeriodicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
