import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: RouterConfig = [
  { path: 'check/:project/:repository', component: HomeComponent },
  { path: 'check/:project', component: HomeComponent },
  {
    path: '',
    redirectTo: '/check/aurelia/framework',
    pathMatch: 'full'
  }
];
