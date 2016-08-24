import { gitHubApiKey } from '../../app/configuration';
import { ErrorService } from '../error.service';

/**
 * Base class for all services. Contains methods shared by all services
 */
export class BaseService  {
  private githubApiAccessToken: string = gitHubApiKey;

  protected handleError(error) {
    this.errorService.reportError(error);
    return Promise.resolve([]);
  }

  protected addAccessToken(){
    if ( this.githubApiAccessToken && this.githubApiAccessToken.length > 0){
      return `?access_token=${gitHubApiKey}`;
    }else {
      return '';
    }
  }

  constructor(private errorService: ErrorService){
  }
}
