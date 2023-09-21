import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

import { CountryComponent } from './country.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryDetailComponent } from './country-list/country-detail/country-detail.component';
import { CountryEditComponent } from './country-list/country-edit/country-edit.component';
import {CountryService} from "./service/country.service";
import { CountryRoutingModule } from './country-routing.module';



@NgModule({
  imports: [
    CommonModule,
    CountryRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    CountryComponent,
    AddCountryComponent,
    CountryListComponent,
    CountryDetailComponent,
    CountryEditComponent,

  ],
  providers: [ CountryService ]
})
export class CountryModule { }
