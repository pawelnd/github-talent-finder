/**
 * Properties of this file corresponds to fields returned by API
 * That is why properties names does not obey common practices and aren't in camel case
 */
export class FilteringCriteria{
  min_public_repos: number = null;
  min_public_gists: number = null;
  min_followers: number = null;
  min_contributions: number = null;

  max_public_repos: number = null;
  max_public_gists: number = null;
  max_followers: number = null;
  max_contributions: number = null;
}
