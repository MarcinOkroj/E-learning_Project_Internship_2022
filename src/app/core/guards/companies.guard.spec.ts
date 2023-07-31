import { TestBed } from '@angular/core/testing';

import { CompaniesGuard } from './companies.guard';

describe('CompaniesGuard', () => {
  let guard: CompaniesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CompaniesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
