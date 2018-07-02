import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable()
export class HttpRestService implements OnInit {

    protected url = 'http://localhost:59716/api/';

    constructor(private http: HttpClient, public sanitizer: DomSanitizer) { }

    // Rest Items Service: Read all REST Items
    getVehiculosCiudad(id) {
        const new_url = this.url + 'vehiculos/' + id;
        return this.http
            .get<any[]>(this.url)
            .pipe(map(data => data));
    }
    ngOnInit() {
    }
}
