import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivecbapopupComponent } from './archivecbapopup.component';

describe('ArchivecbapopupComponent', () => {
  let component: ArchivecbapopupComponent;
  let fixture: ComponentFixture<ArchivecbapopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchivecbapopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchivecbapopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
