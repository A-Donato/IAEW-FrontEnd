import '../polyfills';

import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CarTableComponent } from './home/car-table/car-table.component';
import { HttpRestService } from './sheared/HttpRestService';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { BookDialogComponent } from './book-dialog/book-dialog.component';
import {MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarTableComponent,
    BookDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CdkTableModule,
    CdkTreeModule,
    MatDialogModule
  ],
  providers: [HttpRestService],
  bootstrap: [AppComponent],
  entryComponents: [BookDialogComponent]
})
export class AppModule { }
