import { TestBed } from '@angular/core/testing';

import { RandomAdviceServiceService } from './random-advice-service.service';

describe('RandomAdviceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomAdviceServiceService = TestBed.get(RandomAdviceServiceService);
    expect(service).toBeTruthy();
  });
});
