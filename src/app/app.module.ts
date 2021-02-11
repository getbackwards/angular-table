import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table' 

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TableBasicExample } from './table/table.component';
// import { TableComponent } from './table/table.component';
import { TableBasicExample } from './table/table-basic-example';

@NgModule({
  declarations: [
    AppComponent,
    TableBasicExample
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
