import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import {RepositoryComponent} from "./repository/repository.component";

export const routes: RouterConfig = [
  { path: 'check/:project/:repository', component: RepositoryComponent },
  { path: 'check/:project', component: ProjectComponent },
  {
    path: '',
    redirectTo: '/check/aurelia/framework',
    pathMatch: 'full'
  }
];
