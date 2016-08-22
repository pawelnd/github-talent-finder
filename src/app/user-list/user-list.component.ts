/*
 */
import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import {User} from "./user";
import {RepositoryInfoService} from "./services/repository.service";
import { Router,ActivatedRoute } from '@angular/router';
import {UserFilterComponent} from "./user-filter/user-filter.component";
import {FilteringCriteria} from "./filtering-criteria";
import {UserListFilterPipe} from "./user-list-filter.pipe";
import {UserDetailsModal} from "./modal/user-details.modal";
/*
 */
@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.template.html',
  providers: [UserService,RepositoryInfoService],
  directives:[UserFilterComponent, UserDetailsModal],
  pipes: [UserListFilterPipe],
  styles: [
    require('./user-list.style.less')
  ]
})
export class UserListComponent {
  constructor(
    public userService: UserService,
    private route: ActivatedRoute) {
  }

  users:User[];
  sub: any;
  filter:FilteringCriteria;

  ngOnInit() {
    this.getUsers();
    this.filter  = new FilteringCriteria();
  }

  getUsers() {
    this.sub = this.route.params.subscribe(params => {
      let project = params["project"];
      let repository = params["repository"];

      if(project && repository){
        this.userService.getUsersStatsForRepository(project,repository).then(
          users => this.users = users
        );
      }else if(project){
        this.userService.getUsersStatsForProject(project).then(
          users => this.users = users
        );
      }else{
        this.users =[];
      }
    });
  }

}
