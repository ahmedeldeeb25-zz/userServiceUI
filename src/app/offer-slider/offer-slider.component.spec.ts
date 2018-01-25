import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferSliderComponent } from './offer-slider.component';

describe('OfferSliderComponent', () => {
  let component: OfferSliderComponent;
  let fixture: ComponentFixture<OfferSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
