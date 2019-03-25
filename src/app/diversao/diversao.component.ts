import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css']
})
export class DiversaoComponent implements OnInit {
  public prdDiversao: any;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('diversao')
    .then( resp => {
      this.prdDiversao = resp;
    })
    .catch(error => {
      console.log('error: ', error);
    });
  }

}
