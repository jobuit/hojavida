import { TestBed, inject } from '@angular/core/testing';

import { MetodosService } from './metodos.service';

describe('MetodosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetodosService]
    });
  });

  it('should be created', inject([MetodosService], (service: MetodosService) => {
    expect(service).toBeTruthy();
  }));
});
