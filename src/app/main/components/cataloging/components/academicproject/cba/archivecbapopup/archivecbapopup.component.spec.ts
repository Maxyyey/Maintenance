import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveCbaPopupComponent } from './archivecbapopup.component'; // Updated import statement

describe('ArchiveCbaPopupComponent', () => { // Updated component name in the describe function
  let component: ArchiveCbaPopupComponent; // Updated component name
  let fixture: ComponentFixture<ArchiveCbaPopupComponent>; // Updated component name in ComponentFixture

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchiveCbaPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchiveCbaPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
