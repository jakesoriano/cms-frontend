import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePanelWrapperComponent } from './page-panel-wrapper.component';

describe('PagePanelWrapperComponent', () => {
  let component: PagePanelWrapperComponent;
  let fixture: ComponentFixture<PagePanelWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePanelWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePanelWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
