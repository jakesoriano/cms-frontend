import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Panel8Component } from './panel8.component';

describe('Panel8Component', () => {
  let component: Panel8Component;
  let fixture: ComponentFixture<Panel8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Panel8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Panel8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
