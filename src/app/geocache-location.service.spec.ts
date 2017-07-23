import { TestBed, inject } from '@angular/core/testing';

import { GeocacheLocationService } from './geocache-location.service';

describe('GeocacheLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeocacheLocationService]
    });
  });

  it('should be created', inject([GeocacheLocationService], (service: GeocacheLocationService) => {
    expect(service).toBeTruthy();
  }));
});
