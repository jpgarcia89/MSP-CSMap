import { Component, OnInit } from '@angular/core';
import { CentroDeSalud } from '../model/centro-de-salud';
import { CentrosDeSaludService } from '../services/centros-de-salud.service';
import { DecimalPipe } from '@angular/common';
import { debug } from 'util';



@Component({
  selector: 'app-centro-de-salud',
  templateUrl: './centro-de-salud.component.html',
  styleUrls: ['./centro-de-salud.component.css']
})
export class CentroDeSaludComponent implements OnInit {

  csTittle = 'Centros de Salud';

  centroDeSalud: CentroDeSalud;
  centrosDeSalud: CentroDeSalud[];

  lat = -31.5351832;
  lng = -68.5223334;

  lat1 = -31.5351832;
  lng1 = -69.28492766147195;

  constructor(private centroDeSaludService: CentrosDeSaludService ) { }

  ngOnInit() {
    // const cs = new CentroDeSalud();
    // cs.nombre = 'CAPS Albardon';
    // cs.telefono = '264 4229613';

    this.getCentrosDeSalud();

    // this.centrosDeSalud.push(cs);
  }


  getCentrosDeSalud(): void {
    this.centroDeSaludService.getCentrosDeSalud().subscribe(cs => this.centrosDeSalud = cs.slice(2, 7)
    );
  }

}
