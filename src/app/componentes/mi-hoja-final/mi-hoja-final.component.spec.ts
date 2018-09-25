import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiHojaFinalComponent } from './mi-hoja-final.component';

describe('MiHojaFinalComponent', () => {
  let component: MiHojaFinalComponent;
  let fixture: ComponentFixture<MiHojaFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiHojaFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiHojaFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
