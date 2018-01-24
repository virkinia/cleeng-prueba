import { TestBed, inject } from '@angular/core/testing';

import { ApiCleengService } from './api-cleeng.service';

describe('ApiCleengService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiCleengService]
    });
  });

  it('should be created', inject([ApiCleengService], (service: ApiCleengService) => {
    expect(service).toBeTruthy();
  }));
});
