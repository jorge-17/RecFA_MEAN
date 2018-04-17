import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-detalle-serv',
  templateUrl: './detalle-serv.component.html',
  styleUrls: ['./detalle-serv.component.css']
})
export class DetalleServComponent implements OnInit {
// @jrodarte - Variable donde se almacenaran los registros consultados de la BD
serv: any;
title = "Detalles del Servicio";

constructor(private servicio: ServiceService, private router: Router, private route: ActivatedRoute) { }

ngOnInit() {
  // @jrodarte - Se manda llamar al metodo getServicio pasandole el parametro ID de la URL
  this.getServicio(this.route.snapshot.params['id']);
}

// @jrodarte - Metodo que se encargara de obtener los datos del servicio a modificar
getServicio(id){
  // @jrodarte - Se obtienen los datos del servicio a modificar
  this.servicio.editServicios(id).subscribe((res) => {
    this.serv = res;
  }, (err) => {
    console.log(err);
  });
}

}
