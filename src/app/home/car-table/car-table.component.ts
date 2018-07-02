import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  @Input() vehiculosSoap: any;

  displayedColumns: string[] = ['Id', 'Marca', 'Modelo', 'N° puertas',
  , 'Aire Acondicionado', 'Dirección Asistida', 'Tipo Cambio', 'Precio x Dia', 'Puntaje', 'Disponibles'];
  constructor() { }
  dataSource = this.vehiculosSoap;
  ngOnInit() {
  }

}
