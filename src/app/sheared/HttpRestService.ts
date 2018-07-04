import axios from 'axios';
import { AxiosInstance } from 'axios';

import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable, throwError } from 'rxjs';
import { Country } from './country';
import { City } from './city';
import { Car } from './car';
import { Reserva } from './reserva';
import { RequestOptions } from '@angular/http';

const instance = axios.create({
  timeout: 2000,
  headers: {'Content-Type': 'application/json'}
});

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': 'my-auth-token' el token
  })
};

@Injectable()
export class HttpRestService implements OnInit {
  protected url = 'http://localhost:59716/api/';
  handleError<T>(arg0: any): any {
    throw new Error('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
  }

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


  addReserva(req: Reserva) {

    axios.post('http://localhost:59716/api/reservas/new' , req)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


   /* return this.http.post<Reserva>('http://localhost:59716/api/reservas/new', req, httpOptions)
      .pipe(
        catchError(this.handleError('addReserva'))
      );*/
  }
}

