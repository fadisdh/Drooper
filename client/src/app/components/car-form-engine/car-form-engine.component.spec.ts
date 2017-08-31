import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFormEngineComponent } from './car-form-engine.component';

describe('CarFormEngineComponent', () => {
  let component: CarFormEngineComponent;
  let fixture: ComponentFixture<CarFormEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFormEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFormEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
