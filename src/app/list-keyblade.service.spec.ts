import { TestBed } from '@angular/core/testing';

import { ListKeybladeService } from './list-keyblade.service';

describe('ListKeybladeService', () => {
  let service: ListKeybladeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListKeybladeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
