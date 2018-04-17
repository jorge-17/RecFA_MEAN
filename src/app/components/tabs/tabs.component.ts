import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  // @jrodarte - Variable qie inicia los indices de los tabs
  activeLinkIndex = 0;
  // @jrodarte - Arreglo de tabs con la ruta y la etiqueta que estaran mostrando
  navLinks = [
    {
      path: '/',
      label: 'Home'
    },
    {
      path: '/show/Pendientes',
      label: 'Servicios Pendientes'
    },
    {
      path: '/show/Completos',
      label: 'Servicios Completados'
    },
    {
      path: 'exportar/',
      label: 'Exportar'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
