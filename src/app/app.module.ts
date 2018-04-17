import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routerConfig';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service.service';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatTabsModule, MatInputModule, MatGridListModule, MatButtonModule, MatTableModule, MatDividerModule, MatFormFieldModule, MatSnackBarModule, MatSelectModule, MatListModule/*Agregar los componentes necesarios */} from '@angular/material';


import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { HomeComponent, PizzaPartyComponent } from './components/home/home.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ModificarServComponent } from './components/modificar-serv/modificar-serv.component';
import { ExportarServComponent } from './components/exportar-serv/exportar-serv.component';
import { DetalleServComponent } from './components/detalle-serv/detalle-serv.component';
import { ServiciosCompletosComponent } from './components/servicios-completos/servicios-completos.component';


@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HomeComponent,
    ServiciosComponent,
    ModificarServComponent,
    ExportarServComponent,
    PizzaPartyComponent,
    DetalleServComponent,
    ServiciosCompletosComponent
  ],
  entryComponents: [PizzaPartyComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    /*Agregar los componentes necesarios definidos en los import de Material*/
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatSelectModule,
    MatListModule,
    /*----------------------------------------------------------------------*/
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
