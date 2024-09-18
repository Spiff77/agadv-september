import { TestBed } from '@angular/core/testing';

import { SupplierHttpService } from './supplier-http.service';

describe('SupplierHttpService', () => {
  let service: SupplierHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplierHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
