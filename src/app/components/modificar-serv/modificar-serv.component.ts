import { Component, OnInit, Inject } from '@angular/core';
import { ServiceService } from '../../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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

  constructor(private servicio: ServiceService, public dialog: MatDialog, private router: Router, private route: ActivatedRoute) { }

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
    this.data = {
      paq_r: '',
      nombre_e: ''
    }
    this.openDialog();
  }

  openDialog(): void{
    let dialogRef = this.dialog.open(DialogFinishEdit, {
      width: '250 px'
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log('Se Modifico correctamente (Dialogo Cerrado)');
    });
  }

}

@Component({
  selector: 'dialogEdit',
  templateUrl: 'dialogoEdit.html'
})

export class DialogFinishEdit{
  constructor(
    public dialogRef: MatDialogRef<DialogFinishEdit>, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

  onNoClick(): void{
    this.dialogRef.close();
  }
}
