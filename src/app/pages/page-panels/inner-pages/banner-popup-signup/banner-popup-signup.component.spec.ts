import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPopupSignupComponent } from './banner-popup-signup.component';

describe('BannerPopupSignupComponent', () => {
  let component: BannerPopupSignupComponent;
  let fixture: ComponentFixture<BannerPopupSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerPopupSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerPopupSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
