import { Component, Input, OnInit } from '@angular/core';
import { TarjetaCredito } from '../../models/TarjetaCredito';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent implements OnInit {

  @Input() listTarjetas:TarjetaCredito[] = [
    {titular:"",numeroTarjeta:"",fechaExpiracion:"",cvv:0,fechaCreacion:new Date()}
  ];

  constructor( private toastr:ToastrService) {
  }

  ngOnInit(): void {
    this.obtenerTarjetas();
  }

  obtenerTarjetas(){
    /*this._tarjetaService.obtenerTarjetas().subscribe(doc=>{
      //console.log(doc);
      /*this.listTarjetas=[];
      doc.forEach((element:any) => {
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
        this.listTarjetas.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
      //console.log(this.listTarjetas);
    });*/
  }

}
