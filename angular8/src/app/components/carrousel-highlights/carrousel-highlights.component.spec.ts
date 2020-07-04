import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselHighlightsComponent } from './carrousel-highlights.component';

describe('CarrouselHighlightsComponent', () => {
  let component: CarrouselHighlightsComponent;
  let fixture: ComponentFixture<CarrouselHighlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrouselHighlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
