import { TestBed } from '@angular/core/testing';

import { RandomJokeServiceService } from './random-joke-service.service';

describe('RandomJokeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomJokeServiceService = TestBed.get(RandomJokeServiceService);
    expect(service).toBeTruthy();
  });
});
