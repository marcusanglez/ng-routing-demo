import {Component, OnInit} from '@angular/core';
import {PersonService} from "../service/person.service";
import {Person} from "../person";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  template: `
    <h3>Person List</h3>
    <div *ngFor="let person of people | async" [ngClass]="'sub-child-menu'">
      <p>{{person.personId}}. {{person.name}}, {{person.city}}
        <button type="button" (click)="goToEdit(person)"></button>
      </p>
    </div>
    <div [ngClass]="'sub-child-container'">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class PersonListComponent implements OnInit{
  people: Promise<Person[]>;
  constructor(private personService: PersonService,
              private route: ActivatedRoute,
              private router: Router) {
    this.people = personService.getPeople();
  }
  ngOnInit():void { }
  goToEdit(person: Person){
    this.router.navigate(
        [person.personId], {relativeTo: this.route});
  }
}
