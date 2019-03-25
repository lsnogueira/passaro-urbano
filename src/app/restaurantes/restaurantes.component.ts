import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }
  public ofertas: Oferta[];

  ngOnInit() {
    // jogat metodo das categorias
    this.ofertasService.getOfertasPorCategoria('restaurante')
    .then( (resp) => {
      this.ofertas = resp;
    })
    .catch( (error) => console.log('error ', error));
  }

}
