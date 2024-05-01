import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveChtmPopup1Component } from './archivechtmpopup1.component';

describe('ArchiveChtmPopup1Component', () => {
  let component: ArchiveChtmPopup1Component;
  let fixture: ComponentFixture<ArchiveChtmPopup1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchiveChtmPopup1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchiveChtmPopup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
