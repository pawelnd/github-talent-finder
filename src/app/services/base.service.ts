import {gitHubApiKey} from '../../app/configuration'

export class BaseService  {
  private githubApiAccessToken : string = gitHubApiKey;
  protected handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  protected addAccessToken(url){
    if(this.githubApiAccessToken && this.githubApiAccessToken.length > 0){
      return `${url}?access_token=${gitHubApiKey}`
    }
  }
}
