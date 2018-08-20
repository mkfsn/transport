import { TestBed, inject } from '@angular/core/testing';

import { TraService } from './tra.service';

describe('TraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TraService]
    });
  });

  it('should be created', inject([TraService], (service: TraService) => {
    expect(service).toBeTruthy();
  }));
});
