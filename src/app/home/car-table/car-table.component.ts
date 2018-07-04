import { Component, Input, ChangeDetectorRef, OnInit, Output, EventEmitter } from '@angular/core';
import { Car } from '../../sheared/car';
import { MatDialog } from '@angular/material';
import { BookDialogComponent } from '../../book-dialog/book-dialog.component';
import { Reserva } from '../../sheared/reserva';
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-car-table',
  styleUrls: ['car-table.component.css'],
  templateUrl: 'car-table.component.html',
  entryComponents: [BookDialogComponent]
})


export class CarTableComponent implements OnInit {
    apellidoYNombreCliente: String;
    FechaDevolucion: Date;
    FechaRetiro: Date;
    idVehiculoCiudad: Number;
    lugarRetiro: Number;
    lugarDevolucion: Number;
    nroDocumentoCliente: Number;
    reserva: Reserva = {
      ApellidoNombreCliente: '',
      FechaHoraDevolucion: undefined,
      FechaHoraRetiro: undefined,
      IdVehiculoCiudad: 0,
      LugarDevolucion: '',
      LugarRetiro: '',
      NroDocumentoCliente: 0
    };

    places = [
      {id: 0, name: 'Aeropuerto'},
      {id: 1, name: 'Terminal de Autobus'},
      {id: 2, name: 'Hotel'}
     ];
  constructor(private changeDetectorRefs: ChangeDetectorRef, public dialog: MatDialog) { }
  @Input() vehiculosSoap: Car[];
  @Output() sendBooking = new EventEmitter();

  displayedColumns: string[] = ['id', 'modelo', 'marca', 'cantidadPuertas', 'precioDia'
    , 'aireAcon', 'dirAsist', 'tipoCambio', 'disponibles', 'reservar'];
  dataSource = [];

  openDialog(): void {
    const dialogRef = this.dialog.open(BookDialogComponent, {
      width: '1000px',
      data: {
        apellidoYNombreCliente: this.apellidoYNombreCliente,
        FechaDevolucion: this.FechaDevolucion,
        FechaRetiro: this.FechaRetiro,
        idVehiculoCiudad: this.idVehiculoCiudad,
        lugarRetiro: this.lugarRetiro,
        lugarDevolucion: this.lugarRetiro,
        nroDocumentoCliente: this.nroDocumentoCliente,
        places: this.places
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
       this.reserva.ApellidoNombreCliente = result.apellidoYNombreCliente;
       this.reserva.LugarRetiro = result.lugarRetiro;
       this.reserva.LugarDevolucion = result.lugarDevolucion;
       this.reserva.NroDocumentoCliente = result.nroDocumentoCliente; // explota
       this.reserva.IdVehiculoCiudad = this.idVehiculoCiudad; // explota
       console.log('nroDni ' + result.nroDocumentoCliente + '/ idVehiculociudad ' + result.idVehiculociudad );
       this.emitBooking(this.reserva);
    });
  }


  ngOnInit() {
    this.changeDetectorRefs.detectChanges();
  }

  refresh() {
    setTimeout(() => { this.reallyRefresh(); }, 2000);
  }

  reallyRefresh() {
    console.log('aca tenemos ' + this.vehiculosSoap);
    this.dataSource = this.vehiculosSoap;
    this.changeDetectorRefs.detectChanges();
  }

  book(element) {
    this.idVehiculoCiudad = element.idVehiculoCiudad;
    this.openDialog();
  }

  emitBooking(res: Reserva) {
    this.sendBooking.emit(res);
  }

}

