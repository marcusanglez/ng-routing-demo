import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CountryComponent} from "./country.component";
import {AddCountryComponent} from "./add-country/add-country.component";

const routes: Routes = [
  { path: 'country', component: CountryComponent,
    children: [
      { path: 'add', component: AddCountryComponent},
      //{ path: 'list', component: AddCountryComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
