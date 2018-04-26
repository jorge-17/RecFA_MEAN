import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../../service.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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

  constructor(private servicioService: ServiceService, public dialog: MatDialog) { }

  ngOnInit() {
  }
// @jrodarte - Metodo que se ejecuta al hacer click en el boton registrar
  guardaServicio(e) {
    // @jrodarte - Se manda llamar al servico de agregar servicio nuevo
    this.servicioService.addServicio(this.data);
    this.data = {
      ruta: '',
      empresa: '',
      domicilio: '',
      contacto: '',
      convenio: '',
      tel: '',
      obs: '',
      paquetes : '',
      horario: ''
    }
    this.openDialog();
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogoFinishInsert, {
      width: '250px'      
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log('Se registro correctamente (Dialogo cerrado)');
    });
  }
}

@Component({
  selector: 'dialogInsert',
  templateUrl: 'dialogoInsert.html'
})
export class DialogoFinishInsert{
  constructor(
    public dialogRef: MatDialogRef<DialogoFinishInsert>, @Inject(MAT_DIALOG_DATA) public data: any
  ){}
  onNoClick(): void{
    this.dialogRef.close();
  }
}

