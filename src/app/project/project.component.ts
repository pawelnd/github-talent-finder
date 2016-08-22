import { Component } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'project',
  pipes: [ ],
  styles: [
    require('./project.style.less').toString()
  ],
  templateUrl: './project.template.html',
  directives: [
    UserListComponent
  ]
})
export class ProjectComponent {
  constructor() {
  }
}
