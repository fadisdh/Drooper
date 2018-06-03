import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFormPublishComponent } from './car-form-publish.component';

describe('CarFormPublishComponent', () => {
  let component: CarFormPublishComponent;
  let fixture: ComponentFixture<CarFormPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFormPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFormPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
