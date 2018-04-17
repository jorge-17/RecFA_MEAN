import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../../service.service';
import { MatSnackBar } from '@angular/material';

@Component({
  template: '<span>Servicio almacenado correctamente</span>'
})
export class PizzaPartyComponent { }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ServiceService]
})
export class HomeComponent implements OnInit {
  // @jrodarte - Titulo del formulario
  title = "Ingresa los datos del servicio";
  // @jrodarte - Objeto donde se iran almacenando los objetos para ser registrados
  data = {};

  constructor(private servicioService: ServiceService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }
// @jrodarte - Metodo que se ejecuta al hacer click en el boton registrar
  guardaServicio(e) {
    // @jrodarte - Se manda llamar al servico de agregar servicio nuevo
    this.servicioService.addServicio(this.data);
  }
}

