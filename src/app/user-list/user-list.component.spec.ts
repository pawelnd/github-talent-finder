import { User } from './user';
import { UserListComponent } from './user-list.component';
describe('UserListSorterPipe', () => {
  let component: UserListComponent;

  beforeEach(() => {
    component = new UserListComponent();
  });

  it('generates proper link to gitHub repository', () => {
    component.currentProject = 'a';
    component.currentRepository = 'b';
    expect(component.getSourceLink()).toBe('https://github.com/a/b');
  });
});
