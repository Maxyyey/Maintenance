import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCahsComponent } from './viewcahs.component';

describe('ViewCahsComponent', () => {
  let component: ViewCahsComponent;
  let fixture: ComponentFixture<ViewCahsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewCahsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCahsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
