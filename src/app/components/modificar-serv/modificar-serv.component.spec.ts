import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarServComponent } from './modificar-serv.component';

describe('ModificarServComponent', () => {
  let component: ModificarServComponent;
  let fixture: ComponentFixture<ModificarServComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarServComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
