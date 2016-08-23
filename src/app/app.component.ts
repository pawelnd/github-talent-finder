/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from './app.service';
import {ToasterContainerComponent, ToasterService} from 'angular2-toaster/angular2-toaster';

import 'jquery';
import {ErrorService} from "./error.service";
import {HttpError} from "./error";
/**
 * App Component
 * Top Level Component
 * It is also responsible for displaying error notification
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('./app.style.less').toString(),
    require('../../node_modules/angular2-toaster/lib/toaster.css')
  ],
  directives: [ToasterContainerComponent],
  providers: [ToasterService],
  templateUrl: './app.component.template.html'
})
export class App {
  viewContainerRef:ViewContainerRef;
  constructor( viewContainerRef:ViewContainerRef,
     private router:Router,
     private toasterService: ToasterService,
     private errorService:ErrorService) {
    /**
    * Hack for displaying bootstrap modal as it was suggested in documentation
     * @see <a href="http://valor-software.com/ng2-bootstrap/#/modals">http://valor-software.com/ng2-bootstrap/#/modals</a>
    * */
    this.viewContainerRef = viewContainerRef;
    this.errorService.errorEvent.subscribe(x=>{
      debugger;
      this.toasterService.pop('error', x.statusText || x, x.message || x);
    })
  }


  goToRepo(projectName:string){
    this.router.navigate(['/check', projectName]);
  }

  popToast(){
    this.toasterService.pop('success', 'Args Title', 'Args Body');
  }
}
