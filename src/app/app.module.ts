import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GeoFormComponent } from './geo-form/geo-form.component';
import { GeoListComponent } from './geo-list/geo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GeoFormComponent,
    GeoListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
