import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewceasComponent } from './viewceas.component';

describe('ViewceasComponent', () => {
  let component: ViewceasComponent;
  let fixture: ComponentFixture<ViewceasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewceasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewceasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
