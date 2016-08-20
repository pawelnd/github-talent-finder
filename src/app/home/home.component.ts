import { Component } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'home',
  pipes: [ ],
  styles: [
    require('./home.style.less').toString()
  ],
  templateUrl: './home.template.html',
  directives: [
    UserListComponent
  ]
})
export class HomeComponent {
  constructor() {
  }
}
