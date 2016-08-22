import { Component,ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap';
import {ModalDirective} from 'ng2-bootstrap/components/modal/modal.component';
import {CORE_DIRECTIVES} from '@angular/common';
import {User} from "../user";
import {Repo} from "../repo";
import {UserDetailedInfo} from "./user-detailed-info";
import {UserService} from "../../services/user.service";
import {RepositoryInfoService} from "../../services/repository.service";

@Component({
  selector: 'user-details-modal',
  directives:[ MODAL_DIRECTIVES, CORE_DIRECTIVES],
  viewProviders:[BS_VIEW_PROVIDERS],
  templateUrl: 'user-details.template.html',
  styles: [
    require('./user-details.style.less')
  ]
})
export class UserDetailsModal {
  constructor(
    private userService:UserService,
    private repositoryService:RepositoryInfoService,
    private router:Router) {
  }
  userDetails:UserDetailedInfo;
  repos:Repo[];
  user:User;

  @ViewChild('lgModal')
  public childModal: ModalDirective;

  public showDetails(user:User):void {
    this.user = user;
    this.childModal.show();
    this.userService.getDetailedUserInfo(user.login)
      .then(details => {
        this.userDetails = details
      })
    this.repositoryService.getRepositoriesForUser(user.login)
      .then(repos => this.repos = repos)
  }

  goToRepo(repo:Repo){
    this.router.navigate(['/check', repo.full_name]);
  }
}
