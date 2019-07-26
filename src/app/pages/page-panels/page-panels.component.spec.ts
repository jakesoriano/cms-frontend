import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePanelsComponent } from './page-panels.component';

describe('PagePanelsComponent', () => {
  let component: PagePanelsComponent;
  let fixture: ComponentFixture<PagePanelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePanelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
