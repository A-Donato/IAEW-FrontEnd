import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpRestService } from './../sheared/HttpRestService';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Country } from '../sheared/country';
import { City } from '../sheared/city';
import { MatOptionSelectionChange } from '@angular/material';
import { Car } from '../sheared/car';
import { CarTableComponent } from './car-table/car-table.component';
import { Reserva } from '../sheared/reserva';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedCountryID: number;
  selectedCityID = 0;
  countriesSoap: Country[]; // Fijate como viene el JSON, para asignar los valores al HTML
  citiesSoap: City[]; // Fijate como viene el JSON, para asignar los valores al HTML
  vehiculosSoap: Car[] = [] ; // Fijate como viene el JSON, para asignar los valores al HTML

  minDateFrom: Date;
  maxDateFrom = new Date(2020, 0, 1);
  pickerFrom = this.minDateFrom;
  pickerTo: Date;

  newReserva: Reserva;
  constructor(private restService: HttpRestService) { }
  @ViewChild(CarTableComponent) child: CarTableComponent;

  ngOnInit() {
    this.getCountries();
  }
  getCountries(): void {
    this.restService.getCountries()
      .subscribe(countriesSoap => this.countriesSoap = countriesSoap);
  }

  getCities(): void {
    this.restService.getCities(this.selectedCountryID).
      subscribe(citiesSoap => this.citiesSoap = citiesSoap);
  }

  search() {
    this.getVehiculos();
    this.child.refresh();
  }

  getVehiculos(): void {
    this.restService.getVehiculosCiudad(this.selectedCityID, this.pickerFrom, this.pickerTo).subscribe(vehiculosSoap => {
      this.vehiculosSoap = vehiculosSoap;
      console.log(this.vehiculosSoap);
    });
  }

  onSelectCountry(event: MatOptionSelectionChange, id) {
    if (event.source.selected) {
      this.selectedCountryID = id;
      this.getCities();
    }
  }
  sendBooking(event: Reserva) {
    event.FechaHoraDevolucion = this.pickerTo;
    event.FechaHoraRetiro = this.pickerFrom;
    this.restService.addReserva(event);
  }
}
