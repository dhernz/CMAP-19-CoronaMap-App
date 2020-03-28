import { TestBed } from '@angular/core/testing';

import { GoogleAnalitycsService } from './google-analitycs.service';

describe('GoogleAnalitycsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleAnalitycsService = TestBed.get(GoogleAnalitycsService);
    expect(service).toBeTruthy();
  });
});
