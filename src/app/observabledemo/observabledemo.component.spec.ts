import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservabledemoComponent } from './observabledemo.component';

describe('ObservabledemoComponent', () => {
  let component: ObservabledemoComponent;
  let fixture: ComponentFixture<ObservabledemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservabledemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservabledemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
