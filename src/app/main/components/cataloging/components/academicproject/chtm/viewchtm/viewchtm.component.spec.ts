import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchtmComponent } from './viewchtm.component';

describe('ViewchtmComponent', () => {
  let component: ViewchtmComponent;
  let fixture: ComponentFixture<ViewchtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewchtmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewchtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
