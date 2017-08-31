import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFormPostComponent } from './car-form-post.component';

describe('CarFormPostComponent', () => {
  let component: CarFormPostComponent;
  let fixture: ComponentFixture<CarFormPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFormPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFormPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
