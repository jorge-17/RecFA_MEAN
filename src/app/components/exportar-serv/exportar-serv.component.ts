import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../../service.service';
import { NgForm } from '@angular/forms';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';

@Component({
  selector: 'app-exportar-serv',
  templateUrl: './exportar-serv.component.html',
  styleUrls: ['./exportar-serv.component.css']
})
export class ExportarServComponent implements OnInit {
// @jrodarte - Variable que almacenara los registros que se obtendran de la BD
  public servicios: any;
  public ruta: string;
  public rutas: any;
  public displayedColumns;
  public dataSource;

  constructor(private http: HttpClient, private service: ServiceService) { }

  ngOnInit() {
    // @jrodarte - Se ejecuta la funcion getServicio al cargar iniciar el componente
    this.getServicios();
  }
// @jrodarte - Metodo encargado de obtener los registros de la BD y llenar la table de Materia Desing
  getServicios(){
    // @jrodarte - Se mandan llamar al sevicio encargado de obtener los registros completos
    this.service.getServRutas().subscribe(res => {
      // @jrodarte - Se añaden los registros devueltos por el servicio a la variable
      this.rutas = res;
      console.log(this.rutas);
    });
  }

  getServiciosByRuta(e){
    this.service.getServiciosByRuta(this.ruta).subscribe(res => {
      this.servicios = res;
      console.log(this.servicios);
    });

    this.displayedColumns = ['ruta', '_id'];
    this.dataSource = this.servicios; 
  }

  exportarCSV(){
    var opt = {
      headers: ["No. Servicio", "Ruta", "Empresa", "Direccion", "Contacto", "Convenio", "Telefono", "Obs.", "Paquetes", "Horario", "-", "Nombre Entrega", "Paquetes Reales"]
    }
    new Angular5Csv(this.servicios, 'Servicios '+this.ruta, opt);
  }
  

}
