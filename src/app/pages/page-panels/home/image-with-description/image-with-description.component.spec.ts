import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWithDescriptionComponent } from './image-with-description.component';

describe('ImageWithDesciptionComponent', () => {
  let component: ImageWithDescriptionComponent;
  let fixture: ComponentFixture<ImageWithDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageWithDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageWithDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
