import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFundsPage } from './transfer-funds.page';

describe('TransferFundsPage', () => {
  let component: TransferFundsPage;
  let fixture: ComponentFixture<TransferFundsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferFundsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFundsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
