import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveCeasModalComponent } from './archiveceasmodal.component';

describe('ArchiveCeasModalComponent', () => {
  let component: ArchiveCeasModalComponent;
  let fixture: ComponentFixture<ArchiveCeasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchiveCeasModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchiveCeasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
