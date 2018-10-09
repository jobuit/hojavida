import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionAptitudesComponent } from './educacion-aptitudes.component';

describe('EducacionAptitudesComponent', () => {
  let component: EducacionAptitudesComponent;
  let fixture: ComponentFixture<EducacionAptitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducacionAptitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducacionAptitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
