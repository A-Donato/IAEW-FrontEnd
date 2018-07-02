import { Component, OnInit } from "@angular/core";
import { HttpRestService } from "./../sheared/HttpRestService";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  selectedCountryID = 0;
  selectedCityID = 0;
  countriesSoap: any; //Fijate como viene el JSON, para asignar los valores al HTML
  citiesSoap: any; //Fijate como viene el JSON, para asignar los valores al HTML
  vehiculosSoap: any; //Fijate como viene el JSON, para asignar los valores al HTML

  minDateFrom = new Date(2000, 0, 1);
  maxDateFrom = new Date(2020, 0, 1);
  pickerFrom: Date;
  pickerTo: Date;
  constructor(private restService: HttpRestService) {}
  ngOnInit() {
    this.getCountries();
  }

  search() {

  }

  getCountries(): void {
    this.restService.getCountries().subscribe(countriesSoap => {
      this.countriesSoap = countriesSoap;
      console.log(this.countriesSoap);
    });
  }

  getCities(): void {
    this.restService.getCities(this.selectedCountryID).subscribe(citiesSoap => {
      this.citiesSoap = citiesSoap;
      console.log(this.citiesSoap);
    });
  }

  getVehiculos(): void {
    this.restService.getVehiculosCiudad(this.selectedCityID, this.pickerFrom, this.pickerTo).subscribe(vehiculosSoap => {
      this.vehiculosSoap = vehiculosSoap;
      console.log(this.vehiculosSoap);
    });
  }



  

  /*getIdCiudad(nombre){
    switch(this.ciudad.toUpperCase()) { 
      case constant_expr1: { 
         //statements; 
         break; 
      } 
      case constant_expr2: { 
         //statements; 
         break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
   }
  }*/
}
