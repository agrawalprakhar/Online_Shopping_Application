import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { emptyCartGuard } from './empty-cart.guard';

describe('emptyCartGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => emptyCartGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
