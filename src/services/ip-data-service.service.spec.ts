import { TestBed } from '@angular/core/testing';

import { IpDataServiceService } from './ip-data-service.service';

describe('IpDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpDataServiceService = TestBed.get(IpDataServiceService);
    expect(service).toBeTruthy();
  });
});
