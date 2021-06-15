import { TestBed } from '@angular/core/testing';

import { NumberParamGuard } from './number-param.guard';

describe('NumberParamGuard', () => {
  let guard: NumberParamGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NumberParamGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
