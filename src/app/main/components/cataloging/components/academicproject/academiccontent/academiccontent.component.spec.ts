import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiccontentComponent } from './academiccontent.component';

describe('AcademiccontentComponent', () => {
  let component: AcademiccontentComponent;
  let fixture: ComponentFixture<AcademiccontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcademiccontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcademiccontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
