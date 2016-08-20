
export class User {
  /*
  * General info
  * */
  id: number;
  login: string;
  avatar_url:string;
  html_url:string;

  /*
  * Statistics
  * */
  public_repos: number;
  public_gists: number;
  followers: number;
  contributions:number;

}
