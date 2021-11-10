import { TestBed } from '@angular/core/testing';

import { DemonioService } from './demonio.service';

describe('DemonioService', () => {
  let service: DemonioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemonioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
