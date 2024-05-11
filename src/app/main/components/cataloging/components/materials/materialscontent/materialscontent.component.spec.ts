import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialscontentComponent } from './materialscontent.component';

describe('MaterialscontentComponent', () => {
  let component: MaterialscontentComponent;
  let fixture: ComponentFixture<MaterialscontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MaterialscontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
