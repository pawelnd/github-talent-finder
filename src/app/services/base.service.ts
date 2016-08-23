import {gitHubApiKey} from '../../app/configuration'
import {ErrorService} from "../error.service";
import {HttpError} from "../error";

/**
* Base class for all services. Contains methods shared by all services
* */
export class BaseService  {
  constructor(private errorService:ErrorService){
  }
  private githubApiAccessToken : string = gitHubApiKey;

  protected handleError(error) {
    this.errorService.reportError(error);
    return Promise.resolve([]);
  }

  protected addAccessToken(){
    if(this.githubApiAccessToken && this.githubApiAccessToken.length > 0){
      return `?access_token=${gitHubApiKey}`
    }else {
      return "";
    }
  }
}
