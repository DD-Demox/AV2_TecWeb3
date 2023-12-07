import { TestBed } from '@angular/core/testing';

import { CatApiServiceService } from './cat-api-service.service';

describe('CatApiServiceService', () => {
  let service: CatApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
