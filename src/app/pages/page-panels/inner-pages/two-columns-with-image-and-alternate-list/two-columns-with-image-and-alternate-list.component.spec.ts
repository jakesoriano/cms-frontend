import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnsWithImageAndAlternateListComponent } from './two-columns-with-image-and-alternate-list.component';

describe('TwoColumnsWithImageAndAlternateListComponent', () => {
  let component: TwoColumnsWithImageAndAlternateListComponent;
  let fixture: ComponentFixture<TwoColumnsWithImageAndAlternateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoColumnsWithImageAndAlternateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnsWithImageAndAlternateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
