import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonComponent } from '../person.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonEditComponent } from './person-list/edit/person-edit.component';


@NgModule({
  declarations: [
    PersonComponent,
    PersonListComponent,
    PersonEditComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule
  ]
})
export class PersonModule { }
