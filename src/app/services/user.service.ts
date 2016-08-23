import { Injectable , Inject} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {User} from "../user-list/user";
import {Repo} from "../user-list/repo";
import {RepositoryInfoService} from "./repository.service";
import {BaseService} from "./base.service";
import {UserDetailedInfo} from "../user-list/user-details/user-detailed-info";

@Injectable()
export class UserService extends BaseService {
  constructor( private http:Http, private repoService:RepositoryInfoService) { super()}

  private getContributors(userName:string, repositoryName:string):Promise<User[]> {
    return this.http.get(`https://api.github.com/repos/${userName}/${repositoryName}/contributors`+this.addAccessToken())
      .toPromise()
      .then(response => {
        return response.json() as User[]
      })
      .catch(this.handleError);
  }
  /**
  * Fetches all {@link User} that contributed to  project's repository at least once
  * */
  getUsersStatsForProject(userName:string):Promise<User[]> {
    let resultPromise:Promise<User[]> = new Promise<User[]>((resolve, reject) => {
      let repositoryResolvers = new Array();

      this.repoService.getRepositoriesForUser(userName).then(repos=>{
        for(let repo of repos){
          repositoryResolvers.push(this.getContributors(userName,repo.name));
        }

        Promise.all(repositoryResolvers)
          .then(usersOfRepositories => this.mergeUsersFromDifferentRepositories(usersOfRepositories))
          .then(users => this.fetchStatistics(users))
          .then(users => resolve(users))
      })
    });

    return resultPromise;
  }

  /**
   * Fetches all {@link User} that contributed to given repository
   * */
  getUsersStatsForRepository(userName:string, repositoryName:string):Promise<User[]> {
    let resultPromise:Promise<User[]> = new Promise<User[]>((resolve, reject) => {
      this.getContributors(userName,repositoryName)
          .then(users => this.fetchStatistics(users))
          .then(users => resolve(users))
    });
    return resultPromise;
  }

  getDetailedUserInfo(userName:string){
    return this.http.get(`https://api.github.com/users/${userName}` + this.addAccessToken())
      .toPromise()
      .then(response => {
        return response.json() as UserDetailedInfo
      })
      .catch(this.handleError);
  }

  /**
  * It sum contributions for each user for all repositories
  * */
  private mergeUsersFromDifferentRepositories(usersOfRepositories:Array<User[]>):User[]{
    let usersCollection:User[];

    for(let users of usersOfRepositories){
      if(!usersCollection){
        usersCollection = users;
        continue;
      }
      for(let user of users){
        let contributor:User = usersCollection.find(u => u.id == user.id);
        if(contributor){
          contributor.contributions += user.contributions;
        }else{
          usersCollection.push(user);
        }
      }
    }
    return usersCollection;
  }

  /**
   * It iterates over collection of users and it adds to {@link User}
   * its statistics like amount of followers for example
  * */
  private fetchStatistics(users:User[]):Promise<User[]>{
    let statisticResolvers = new Array();
    for(let user of users){
      statisticResolvers.push(this.http.get(`https://api.github.com/users/${user.login}` + this.addAccessToken())
        .toPromise()
        .then(response => {
          user.public_repos = response.json().public_repos;
          user.public_gists = response.json().public_gists;
          user.followers = response.json().followers;
          return user;
        })
        .catch(this.handleError));
    }
    return Promise.all(statisticResolvers);
  }

}



