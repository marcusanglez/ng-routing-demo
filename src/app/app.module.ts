import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddressComponent } from './address.component';
import { PageNotFoundComponent } from './page-not-found.component';
import {PersonModule} from "./person/person.module";
import {CountryModule} from "./country/country.module";

@NgModule({
  imports: [
    BrowserModule,
    PersonModule,
    CountryModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AddressComponent,
    PageNotFoundComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
