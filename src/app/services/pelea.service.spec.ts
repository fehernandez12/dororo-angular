import { TestBed } from '@angular/core/testing';

import { PeleaService } from './pelea.service';

describe('PeleaService', () => {
  let service: PeleaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeleaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
