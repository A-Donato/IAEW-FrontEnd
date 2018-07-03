import { Component, Input, ChangeDetectorRef, OnInit } from '@angular/core';
import { Car } from '../../sheared/car';
import { MatDialog } from '@angular/material';
import { BookDialogComponent } from '../../book-dialog/book-dialog.component';
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
  apellidoYNombreCliente: string;
  FechaDevolucion: Date;
  FechaRetiro: Date;
  idVehiculoCiudad: number;
  lugarRetiro: number;
  lugarDevolucion: number;
  nroDocumentoCliente: number;

  constructor(private changeDetectorRefs: ChangeDetectorRef, public dialog: MatDialog) { }
  @Input() vehiculosSoap: Car[];
  displayedColumns: string[] = ['id', 'modelo', 'marca', 'cantidadPuertas', 'precioDia'
    , 'aireAcon', 'dirAsist', 'tipoCambio', 'disponibles', 'reservar'];
  dataSource = [];

  openDialog(): void {
    const dialogRef = this.dialog.open(BookDialogComponent, {
      width: '500px',
      data: {
        apellidoYNombreCliente: this.apellidoYNombreCliente,
        FechaDevolucion: this.FechaDevolucion,
        FechaRetiro: this.FechaRetiro,
        idVehiculoCiudad: this.idVehiculoCiudad,
        lugarRetiro: this.lugarRetiro,
        lugarDevolucion: this.lugarRetiro,
        nroDocumentoCliente: this.nroDocumentoCliente
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
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
    this.openDialog();

  }
}

