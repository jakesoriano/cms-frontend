import { TestBed } from '@angular/core/testing';

import { WebViewsService } from './web-views.service';

describe('WebViewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebViewsService = TestBed.get(WebViewsService);
    expect(service).toBeTruthy();
  });
});
