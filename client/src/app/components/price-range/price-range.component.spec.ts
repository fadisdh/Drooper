import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceRangeComponent } from './price-range.component';

describe('CarPriceSelectorComponent', () => {
  let component: PriceRangeComponent;
  let fixture: ComponentFixture<PriceRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
