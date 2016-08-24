import { UserListSorterPipe } from './user-list-sorter.pipe';
import { User } from './user';
describe('UserListSorterPipe', () => {
  let pipe: UserListSorterPipe;
  beforeEach(() => {
    pipe = new UserListSorterPipe();
  });

  it('sorts list of users by amount of contributions if descending order', () => {
    let users = [new User('Max', 1, 1, 1, 1),  new User('Kate', 2, 2, 2, 2)];

    let result = pipe.transform(users);
    expect(result.length).toBe(2);
    expect(result[0].login).toBe('Kate');
    expect(result[1].login).toBe('Max');
  });
});
