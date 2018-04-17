import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modificar-serv',
  templateUrl: './modificar-serv.component.html',
  styleUrls: ['./modificar-serv.component.css']
})
export class ModificarServComponent implements OnInit {
  // @jrodarte - Variable donde se almacenaran los registros consultados de la BD
  serv: any;
  // @jrodarte - Variable donde se almacenaran los datos que se actualizaran del servicio
  data = {};
  title = "Actualizar Servicio";

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

  // @jrodarte - Metodo que enviara los datos nuevos al servidor para la actualizacion de los datos
  actualizaServicio(){
    // @jrodarte - Se envian los datos al servicio para actualizar la base de datos
    this.servicio.updateServicio(this.data, this.serv._id);
  }

}
