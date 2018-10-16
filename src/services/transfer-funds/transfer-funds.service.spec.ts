import { TestBed } from '@angular/core/testing';

import { TransferFundsService } from './transfer-funds.service';

describe('TransferFundsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransferFundsService = TestBed.get(TransferFundsService);
    expect(service).toBeTruthy();
  });
});
