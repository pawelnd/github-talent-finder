import {gitHubApiKey} from '../../app/configuration'

/**
* Base class for all services. Contains methods shared by all services
* */
export class BaseService  {
  private githubApiAccessToken : string = gitHubApiKey;
  protected handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  protected addAccessToken(){
    if(this.githubApiAccessToken && this.githubApiAccessToken.length > 0){
      return `?access_token=${gitHubApiKey}`
    }else {
      return "";
    }
  }
}
