import { TestBed } from '@angular/core/testing';

import { AdvancedTableServices } from './list-service.service';

describe('AdvancedTableServices', () => {
  let service: AdvancedTableServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvancedTableServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
