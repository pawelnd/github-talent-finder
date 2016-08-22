import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Repo} from "../../user-list/repo";
import {RepositoryInfoService} from "../../services/repository.service";

@Component({
  selector: 'repository-info',
  templateUrl: './repository-info.template.html',
  providers: [RepositoryInfoService]
})
export class RepositoryInfo {
  constructor(private route: ActivatedRoute,
              private repoService:RepositoryInfoService) {
  }

  repo: Repo;
  sub: any;
  ngOnInit() {
    this.getRepositoryInfo();
  }

  getRepositoryInfo() {
    this.sub = this.route.params.subscribe(params => {
      let project = params["project"];
      let repository = params["repository"];
      this.repoService.getRepositoriesForUser(project)
        .then(repos => {
          this.repo = repos.find(repo => repo.name == repository)
        });
    });
  }
}
