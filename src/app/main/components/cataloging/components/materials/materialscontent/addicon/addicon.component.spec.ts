import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddiconComponent } from './addicon.component';

describe('AddiconComponent', () => {
  let component: AddiconComponent;
  let fixture: ComponentFixture<AddiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddiconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
