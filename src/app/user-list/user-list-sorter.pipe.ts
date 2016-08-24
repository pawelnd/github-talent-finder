import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';
import { FilteringCriteria } from './filtering-criteria';

@Pipe({
  name: 'UserListSorter',
  pure: false
})

/**
 * It sorts collection of {@link User} by amount of contributions in descending
 */
export class UserListSorterPipe implements PipeTransform {
  transform(usersAll: User[]) {
    return usersAll.sort((u1, u2) => this.compareUser(u1, u2));
  }

  private compareUser(user1: User, user2: User){
    return user2.contributions - user1.contributions;
  }
}
