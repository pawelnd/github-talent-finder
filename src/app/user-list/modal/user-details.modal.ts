/*
 */
import { Component,ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap';
import {ModalDirective} from 'ng2-bootstrap/components/modal/modal.component';
import {CORE_DIRECTIVES} from '@angular/common';
import {User} from "../user";
import {UserDetailedInfo} from "./user-detailed-info";
import {UserService} from "../services/user.service";

@Component({
  selector: 'user-details-modal',
  directives:[ MODAL_DIRECTIVES, CORE_DIRECTIVES],
  viewProviders:[BS_VIEW_PROVIDERS],
  template:`
    <div bsModal #lgModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" *ngIf="user">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" (click)="lgModal.hide()" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title">Users details</h4>
          </div>
          <div class="modal-body" *ngIf="userDetails">
            <h4>
                <a [href]="user.html_url" target="_blank">{{user.login}}</a>
            </h4>
            <p *ngIf="userDetails.name">Name: {{userDetails.name}}</p>
            <p *ngIf="userDetails.email">E-mail adderess: <a href="mailto:{{userDetails.email}}"> {{userDetails.email}}</a></p>
            <p *ngIf="userDetails.blog">Blog:  <a href="{{userDetails.blog}}" target="_blank">{{userDetails.blog}}</a></p>
            <p *ngIf="userDetails.company">Company: {{userDetails.company}}</p>
            <p *ngIf="userDetails.location">Location: {{userDetails.location}}</p>
            <p *ngIf="userDetails.hireable">Available to hire: {{userDetails.hireable?'yes':'no'}}</p>
            <p *ngIf="userDetails.bio">Biography: {{userDetails.bio}}</p>

          </div>
          <div class="modal-body" *ngIf="!userDetails">
            <img src="assets/loading.gif" class="center-block">
          </div>
        </div>
      </div>
    </div>
  `
})
export class UserDetailsModal {
  constructor(private userService:UserService) {
  }
  userDetails:UserDetailedInfo;
  user:User;

  @ViewChild('lgModal')
  public childModal: ModalDirective;

  public showDetails(user:User):void {
    this.user = user;
    this.childModal.show();
    this.userService.getDetailedUserInfo(user.login)
      .then(details => {
        console.log(details);
        this.userDetails = details
      })
  }
}
