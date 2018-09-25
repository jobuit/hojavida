import { TestBed, inject } from '@angular/core/testing';

import { FirebaseCrudService } from './firebase-crud.service';

describe('FirebaseCrudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseCrudService]
    });
  });

  it('should be created', inject([FirebaseCrudService], (service: FirebaseCrudService) => {
    expect(service).toBeTruthy();
  }));
});
