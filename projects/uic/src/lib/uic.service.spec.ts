import { TestBed } from '@angular/core/testing';

import { UicService } from './uic.service';

describe('UicService', () => {
  let service: UicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
