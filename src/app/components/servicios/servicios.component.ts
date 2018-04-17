import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../../service.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
// @jrodarte - Variable que almacenara los registros que se obtendran de la BD
  public servicios: any;
  // @jrodarte - Variables utilizadas para el llenado de la tabla de Material Design
  public displayedColumns;
  public dataSource;
  constructor(private http: HttpClient, private service: ServiceService) { }

  ngOnInit() {
    // @jrodarte - Se ejecuta la funcion getServicio al cargar iniciar el componente
    this.getServicios();
  }
// @jrodarte - Metodo encargado de obtener los registros de la BD y llenar la table de Materia Desing
  getServicios() {
    // @jrodarte - Se mandan llamar al sevicio encargado de obtener los registros pendientes
    this.service.getServiciosPend().subscribe(res => {
      // @jrodarte - Se añaden los registros devueltos por el servicio a la variable
      this.servicios = res;
    });
    // @jrodarte - se despliegan las columnas y se llena la tabla
    this.displayedColumns = ['_id', 'empresa', 'convenio', 'paquetes', 'btn-update'];
    this.dataSource = this.servicios;   
  }   

}
