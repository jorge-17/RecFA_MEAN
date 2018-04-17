import { Routes } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs.component';
import { HomeComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ModificarServComponent } from './components/modificar-serv/modificar-serv.component';
import { ExportarServComponent } from './components/exportar-serv/exportar-serv.component';
import { DetalleServComponent } from './components/detalle-serv/detalle-serv.component';
import { ServiciosCompletosComponent } from './components/servicios-completos/servicios-completos.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'show/Pendientes',
    component: ServiciosComponent
  },
  {
    path: 'serv/:id',
    component: ModificarServComponent
  },
  {
    path: 'show/Completos',
    component: ServiciosCompletosComponent
  },
  {
    path: 'serv/details/:id',
    component: DetalleServComponent
  },
  {
    path: 'exportar',
    component: ExportarServComponent
  }
];
