import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearhistoryComponent } from './clearhistory.component';

describe('ClearhistoryComponent', () => {
  let component: ClearhistoryComponent;
  let fixture: ComponentFixture<ClearhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClearhistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClearhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
