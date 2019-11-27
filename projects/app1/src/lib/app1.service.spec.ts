import { TestBed } from '@angular/core/testing';

import { App1Service } from './app1.service';

describe('App1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: App1Service = TestBed.get(App1Service);
    expect(service).toBeTruthy();
  });
});
