import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcatalogingComponent } from './viewcataloging.component';

describe('ViewcatalogingComponent', () => {
  let component: ViewcatalogingComponent;
  let fixture: ComponentFixture<ViewcatalogingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewcatalogingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewcatalogingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
