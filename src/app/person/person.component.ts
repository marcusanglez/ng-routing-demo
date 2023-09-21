import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  template:`<h2>Welcome to Person Home</h2>
  <div [ngClass] = "'child-container'">
    <router-outlet></router-outlet>
  </div>
  `
})
export class PersonComponent {

}
