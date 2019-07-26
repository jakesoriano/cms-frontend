import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageformWithContactdetailsComponent } from './messageform-with-contactdetails.component';

describe('MessageformWithContactdetailsComponent', () => {
  let component: MessageformWithContactdetailsComponent;
  let fixture: ComponentFixture<MessageformWithContactdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageformWithContactdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageformWithContactdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
