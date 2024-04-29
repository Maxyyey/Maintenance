import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterbarcodeComponent } from './enterbarcode.component';

describe('EnterbarcodeComponent', () => {
  let component: EnterbarcodeComponent;
  let fixture: ComponentFixture<EnterbarcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnterbarcodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnterbarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
