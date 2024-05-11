import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddiconacadComponent } from './addiconacad.component';

describe('AddiconacadComponent', () => {
  let component: AddiconacadComponent;
  let fixture: ComponentFixture<AddiconacadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddiconacadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddiconacadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
