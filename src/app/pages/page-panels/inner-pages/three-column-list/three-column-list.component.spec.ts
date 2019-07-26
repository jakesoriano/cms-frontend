import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeColumnListComponent } from './three-column-list.component';

describe('ThreeColumnListComponent', () => {
  let component: ThreeColumnListComponent;
  let fixture: ComponentFixture<ThreeColumnListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeColumnListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeColumnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
