import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadSocialComponent } from './seguridad-social.component';

describe('SeguridadSocialComponent', () => {
  let component: SeguridadSocialComponent;
  let fixture: ComponentFixture<SeguridadSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguridadSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
