import { Component } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import {RepositoryInfo} from "./repository-info/repository-info.component";

@Component({
  selector: 'repository',
  pipes: [ ],
  styles: [
    require('./repository.style.less').toString()
  ],
  templateUrl: './repository.template.html',
  directives: [
    UserListComponent, RepositoryInfo
  ]
})
export class RepositoryComponent {
  constructor() {
  }
}
