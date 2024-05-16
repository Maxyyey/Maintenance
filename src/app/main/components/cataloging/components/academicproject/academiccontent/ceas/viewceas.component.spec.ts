import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCeasComponent } from './viewceas.component';

describe('ViewCeasComponent', () => {
  let component: ViewCeasComponent;
  let fixture: ComponentFixture<ViewCeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewCeasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
