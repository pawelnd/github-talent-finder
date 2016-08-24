import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from './user';
import { RepositoryInfoService } from '../services/repository.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserFilterComponent } from './user-filter/user-filter.component';
import { FilteringCriteria } from './filtering-criteria';
import { UserListFilterPipe } from './user-list-filter.pipe';
import { UserDetailsModal } from './user-details/user-details.modal';

@Component({
  selector:  'user-list',
  templateUrl:  './user-list.component.template.html',
  providers:  [UserService, RepositoryInfoService],
  directives:  [UserFilterComponent, UserDetailsModal],
  pipes:  [UserListFilterPipe],
  styles:  [
    require('./user-list.style.less')
  ]
})
/**
 * Component responsible for displaying users which contributed to github project/repository
 * It users state parameters to determine project and repository
 */
export class UserListComponent {
  constructor(private userService: UserService,
              private route: ActivatedRoute) {
  }

  users: User[];
  sub: any;
  filter: FilteringCriteria;
  isLoaded: boolean = false;
  currentProject: string;
  currentRepository: string;

  ngOnInit() {
    this.getUsers();
    this.filter = new FilteringCriteria();
  }

  getUsers() {
    this.sub = this.route.params.subscribe(params => {
      this.isLoaded = false;
      this.currentProject = params['project'];
      this.currentRepository = params['repository'];
      let promise: Promise<any>;
      if (this.currentProject && this.currentRepository) {
        promise = this.userService.getUsersStatsForRepository(
          this.currentProject, this.currentRepository
        );
      } else if (this.currentProject) {
        promise = this.userService.getUsersStatsForProject(this.currentProject);
      } else {
        promise = Promise.resolve([]);
      }
      promise.then(
        users => {
          this.users = users;
          this.isLoaded = true;
        },
        x => {
          this.users = [];
          this.isLoaded = true;
        }
      );
    });
  }

  getSourceLink() {
    return `https://github.com/${this.currentProject}${this.currentRepository ? '/' :  ''}` +
      `${this.currentRepository ? this.currentRepository :  ''}`;
  }


}
