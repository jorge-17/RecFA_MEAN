import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }

  addServicio(data) {
    const uri = 'http://localhost:3000/serv/add';
    const obj = data;
    this.http.post(uri, obj)
        .subscribe(res => console.log('Done'));
  }

  getServiciosPend() {
    const uri = 'http://localhost:3000/serv/show/pendientes';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  getServiciosComp() {
    const uri = 'http://localhost:3000/serv/show/completos';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  getServiciosByRuta(ruta){
    const uri = 'http://localhost:3000/serv/show/serviciosByRuta/' + ruta;
    return this.http.get(uri).map(res => {
      return res;
    });
  }

  editServicios(id){
    const uri = 'http://localhost:3000/serv/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editServiciosByNombre(nombre){
    const uri = 'http://localhost:3000/serv/' + nombre;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateServicio(data, id) {
    const uri = 'http://localhost:3000/serv/' + id;
    const obj = data;
    this
      .http
      .put(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  getServRutas(){
    const uri = 'http://localhost:3000/serv/show/distRutas';
    return this.http.get(uri).map(res => {
      return res;
    });
  }

}
