import { Injectable , Inject} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {User} from "../user";
import {Repo} from "../repo";
import {BaseService} from "./base.service";

@Injectable()
export class RepositoryInfoService extends BaseService {
  constructor( private http:Http) {super(); }

  getRepositoriesForUser(userName:string):Promise<Repo[]> {
    return this.http.get(`https://api.github.com/users/${userName}/repos?access_token=58c694b546f35945a572a4953940aeb94558a72b`)
      .toPromise()
      .then(response => {
        return response.json() as Repo[]
      })
      .catch(this.handleError);
  }
}
