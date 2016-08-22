/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { AppState } from './app.service';
import 'jquery';
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('./app.style.less').toString()
  ],
  templateUrl: './app.component.template.html'
})
export class App {
  viewContainerRef:ViewContainerRef;
  constructor(
    public appState: AppState, viewContainerRef:ViewContainerRef) {
    /**
    * Hack for displaying bootstrap modal as it was suggested in documentation
     * @see <a href="http://valor-software.com/ng2-bootstrap/#/modals">http://valor-software.com/ng2-bootstrap/#/modals</a>
    * */
    this.viewContainerRef = viewContainerRef;
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
