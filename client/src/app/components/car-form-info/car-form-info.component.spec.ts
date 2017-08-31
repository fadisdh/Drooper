import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFormInfoComponent } from './car-form-info.component';

describe('CarFormInfoComponent', () => {
  let component: CarFormInfoComponent;
  let fixture: ComponentFixture<CarFormInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFormInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFormInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
