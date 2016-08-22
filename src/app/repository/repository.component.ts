import { Component } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'repository',
  pipes: [ ],
  styles: [
    require('./repository.style.less').toString()
  ],
  templateUrl: './repository.template.html',
  directives: [
    UserListComponent
  ]
})
export class RepositoryComponent {
  constructor() {
  }
}
