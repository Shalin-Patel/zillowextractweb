import { TestBed } from '@angular/core/testing';

import { DefaultConfigurationsService } from './default-configurations.service';

describe('DefaultConfigurationsService', () => {
  let service: DefaultConfigurationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultConfigurationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
