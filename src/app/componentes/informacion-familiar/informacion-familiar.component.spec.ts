import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionFamiliarComponent } from './informacion-familiar.component';

describe('InformacionFamiliarComponent', () => {
  let component: InformacionFamiliarComponent;
  let fixture: ComponentFixture<InformacionFamiliarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionFamiliarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
