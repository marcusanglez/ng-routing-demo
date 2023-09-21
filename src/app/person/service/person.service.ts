import { Injectable } from '@angular/core';
import {Person} from "../person";

const PEOPLE = [
    new Person(1, 'Mango', 'Manchester'),
    new Person(2, 'Jack', 'Langley'),
    new Person(3, 'Pepe', 'Mexico'),
];

let peoplePromise = Promise.resolve(PEOPLE);

@Injectable()
export class PersonService {

  people = {} as Person[];
  constructor() { }
  getPeople(){
   return peoplePromise;
  }
  getPerson(id:number){
    return this.getPeople()
        .then(people =>
          people.find(e => e.personId === id));
  }
  updatePerson(person: Person) {
    return this.getPeople()
        .then(people => {

            let found = people.find(pE => pE.personId === person.personId);
            found = person;
            return found;
        });
  }


}
