import { UserListFilterPipe } from './user-list-filter.pipe';
import {User} from "./user";
import {FilteringCriteria} from "./filtering-criteria";
describe('UserListFilterPipe', () => {
  let pipe: UserListFilterPipe;
  beforeEach(() => {
    pipe = new UserListFilterPipe();
  });

  it('filter user list by given min criteria', () => {
    let users = [new User('Max',1,1,1,1),new User('Kate',2,2,2,2)];
    let filterCriteria = new FilteringCriteria();
    filterCriteria.min_followers = 2;

    let result = pipe.transform(users,filterCriteria);
    expect(result.length).toBe(1);
    expect(result[0].login).toBe('Kate');
  });

  it('filter user list by given max criteria', () => {
    let users = [new User('Max',1,1,1,1),new User('Kate',2,2,2,2)];
    let filterCriteria = new FilteringCriteria();
    filterCriteria.max_followers = 1;

    let result = pipe.transform(users,filterCriteria);
    expect(result.length).toBe(1);
    expect(result[0].login).toBe('Max');
  });
});
