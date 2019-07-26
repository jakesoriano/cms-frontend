import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeColumnIconsComponent } from './three-column-icons.component';

describe('ThreeColumnIconsComponent', () => {
  let component: ThreeColumnIconsComponent;
  let fixture: ComponentFixture<ThreeColumnIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeColumnIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeColumnIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
