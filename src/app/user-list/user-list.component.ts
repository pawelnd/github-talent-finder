/*
 */
import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import {User} from "./user";
import {RepositoryInfoService} from "./services/repository.service";
import { Router,ActivatedRoute } from '@angular/router';
/*
 */
@Component({
  selector: 'user-list',
  styles: [
    require('./user-list.style.less').toString()
  ],
  templateUrl: './user-list.component.template.html',
  providers: [UserService,RepositoryInfoService]
})
export class UserListComponent {
  constructor(
    public userService: UserService,
    private route: ActivatedRoute) {
  }

  users:User[];
  sub: any;

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.sub = this.route.params.subscribe(params => {
      let project = params["project"];
      let repository = params["repository"];

      if(project && repository){
        this.userService.getUsersForRepository(project,repository).then(
          users => this.users = users
        );
      }else if(project){
        this.userService.getUsersForProject(project).then(
          users => this.users = users
        );
      }else{
        this.users =[];
      }
    });

  }


}
