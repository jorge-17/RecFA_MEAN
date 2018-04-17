import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportarServComponent } from './exportar-serv.component';

describe('ExportarServComponent', () => {
  let component: ExportarServComponent;
  let fixture: ComponentFixture<ExportarServComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportarServComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportarServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
