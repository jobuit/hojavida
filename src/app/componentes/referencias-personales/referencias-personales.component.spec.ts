import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciasPersonalesComponent } from './referencias-personales.component';

describe('ReferenciasPersonalesComponent', () => {
  let component: ReferenciasPersonalesComponent;
  let fixture: ComponentFixture<ReferenciasPersonalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenciasPersonalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciasPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
