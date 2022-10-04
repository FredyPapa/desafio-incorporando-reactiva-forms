import { Component } from '@angular/core';
import { TarjetaCredito } from './models/TarjetaCredito';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarjeta-credito';
  listadoTarjetaCredito:TarjetaCredito[]=[];

  agregarTarjeta(tarjeta:any){
    this.listadoTarjetaCredito.push(tarjeta);
    //console.log(this.listadoTarjetaCredito);
  }

}
