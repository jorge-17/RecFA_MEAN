import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleServComponent } from './detalle-serv.component';

describe('DetalleServComponent', () => {
  let component: DetalleServComponent;
  let fixture: ComponentFixture<DetalleServComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleServComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
