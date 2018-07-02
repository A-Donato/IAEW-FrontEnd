import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Injectable()
export class HttpRestService implements OnInit {
  protected url = "http://localhost:59716/api/";

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) {}
  ngOnInit() {}

  getCountries() {
    const new_url = this.url + "paises/";
    return this.http.get<any[]>(new_url).pipe(map(data => data));
  }

  getCities(idPais) {
    const new_url = this.url + "paises/" + idPais + "/ciudades";
    return this.http.get<any[]>(new_url).pipe(map(data => data));
  }

  // Rest Items Service: Read all REST Items
  getVehiculosCiudad(idCity, dateFrom, dateTo) {
    let params = new HttpParams();
    params = params.append("var1", dateFrom);
    params = params.append("var2", dateTo);
    const new_url = this.url + "vehiculos/" + idCity;
    return this.http.get<any[]>(new_url, {params: params}).pipe(map(data => data)); //deberia andar
  }
}
