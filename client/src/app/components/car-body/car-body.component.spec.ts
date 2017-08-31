import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBodyComponent } from './car-body.component';

describe('CarBodyComponent', () => {
  let component: CarBodyComponent;
  let fixture: ComponentFixture<CarBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
