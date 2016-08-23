import { Injectable , Inject} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {User} from "../user-list/user";
import {Repo} from "../user-list/repo";
import {BaseService} from "./base.service";
import {ErrorService} from "../error.service";

@Injectable()
export class RepositoryInfoService extends BaseService {
  constructor( private http:Http,
               errorService:ErrorService) {
    super(errorService);
  }

  getRepositoriesForUser(userName:string):Promise<Repo[]> {
    return this.http.get(`https://api.github.com/users/${userName}/repos` + this.addAccessToken())
      .toPromise()
      .then(response => {
        return response.json() as Repo[]
      })
      .catch(error => this.handleError(error));
  }
}
