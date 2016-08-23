import { Pipe, PipeTransform } from '@angular/core';
import {User} from "./user";
import {FilteringCriteria} from "./filtering-criteria";

@Pipe({
  name: 'UserListFilter',
  pure: false
})

/**
* IT filters collection of {@link User} based on given {@link FilteringCriteria}
* */
export class UserListFilterPipe implements PipeTransform {
  private propertiesToBeChecked:string[] = ['followers','contributions','public_repos','public_gists']
  transform(usersAll: User[], criteria:FilteringCriteria) {
    return usersAll.filter(user => this.checkUser(user,criteria));
  }

  private checkUser(user: User, criteria:FilteringCriteria):boolean{
    for(let property of this.propertiesToBeChecked){
      if(!this.checkUsersFieldsMatchFilter(user,criteria, property)){
        return false;
      }
    }
    return true;
  }

  private checkUsersFieldsMatchFilter(user: User, criteria:FilteringCriteria, property:string):boolean{
    let matchFilter = true;
    if(criteria['min_' + property]){
      matchFilter = matchFilter && user[property] >= criteria['min_' + property];
    }
    if(criteria['max_' + property]){
      matchFilter = matchFilter && user[property] <= criteria['max_' + property];
    }
    return matchFilter;

  }

}
