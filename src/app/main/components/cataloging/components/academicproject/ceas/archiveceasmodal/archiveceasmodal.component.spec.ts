import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveceasmodalComponent } from './archiveceasmodal.component';

describe('ArchiveceasmodalComponent', () => {
  let component: ArchiveceasmodalComponent;
  let fixture: ComponentFixture<ArchiveceasmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchiveceasmodalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchiveceasmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
