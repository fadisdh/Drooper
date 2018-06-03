import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFormPicturesComponent } from './car-form-pictures.component';

describe('CarFormPicturesComponent', () => {
  let component: CarFormPicturesComponent;
  let fixture: ComponentFixture<CarFormPicturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFormPicturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFormPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
