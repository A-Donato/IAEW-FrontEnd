import { Component, OnInit } from '@angular/core';
import { HttpRestService } from './../sheared/HttpRestService';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ciudad = '';
  constructor() { }

  ngOnInit() {
  }

  search() {
    

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
