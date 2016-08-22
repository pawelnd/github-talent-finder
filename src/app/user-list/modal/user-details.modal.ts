/*
 */
import { Component,ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import {MODAL_DIRECTIVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap';
import {ModalDirective} from 'ng2-bootstrap/components/modal/modal.component';
import {CORE_DIRECTIVES} from '@angular/common';
import {User} from "../user";

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
            <h4 class="modal-title">{{user.login}}</h4>
          </div>
          <div class="modal-body">
            <h4>
                <a [href]="user.html_url" target="_blank">{{user.login}}</a>
            </h4>
            <p>Contributions: {{user.contributions}}</p>
            <p>Published repositories: {{user.public_repos}}</p>
            <p>Published gists: {{user.public_gists}}</p>
            <p>Followers: {{user.followers}}</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class UserDetailsModal {
  constructor() {
  }


  @ViewChild('lgModal')
  public childModal: ModalDirective;

  public showDetails(user:User):void {
    this.childModal.show();
  }
}
