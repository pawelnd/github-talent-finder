
export class User {
  /*
  * General info
  * */
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;

  /*
  * Statistics
  * */
  public_repos: number;
  public_gists: number;
  followers: number;
  contributions: number;

  constructor(login, public_repos, public_gists, followers, contributions){
    this.login = login;
    this.public_repos = public_repos;
    this.public_gists = public_gists;
    this.followers = followers;
    this.contributions = contributions;
  }
}
