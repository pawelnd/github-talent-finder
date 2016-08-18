/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';
import 'jquery';
import { AlertComponent, DATEPICKER_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
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
  templateUrl: './app.component.template.html',
  directives: [
    AlertComponent,
    DATEPICKER_DIRECTIVES
  ]
})
export class App {

  constructor(
    public appState: AppState) {

  }

  localState = { value: '' };
  date: Date = new Date();

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
