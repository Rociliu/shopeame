import { TestBed } from '@angular/core/testing';

import { CambioModoService } from './cambio-modo.service';

describe('CambioModoService', () => {
  let service: CambioModoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CambioModoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
