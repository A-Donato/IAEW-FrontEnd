import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Country } from './country';
import { City } from './city';
import { Car } from './car';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Injectable()
export class HttpRestService implements OnInit {
  protected url = 'http://localhost:59716/api/';

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) { }
  ngOnInit() { }

  getCountries(): Observable<Country[]> {
    const response = this.http.get<Country[]>(this.url + 'paises/')
    .pipe();
    return response;
  }

  getCities(idPais) {
    const response = this.http.get<City[]>(this.url + 'paises/' + idPais + '/ciudades/')
    .pipe();
    return response;
  }

  getVehiculosCiudad(idCity, dateFrom: Date, dateTo: Date) {
    const response = this.http.get<Car[]>(this.url + 'vehiculos/' + idCity + '/' +
     dateFrom + '/' + dateTo).pipe();

    return response;
  }
}
