import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosCompletosComponent } from './servicios-completos.component';

describe('ServiciosCompletosComponent', () => {
  let component: ServiciosCompletosComponent;
  let fixture: ComponentFixture<ServiciosCompletosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosCompletosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosCompletosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
