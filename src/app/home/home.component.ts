import { Component } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  selector: 'home',
  pipes: [ ],
  styles: [
    require('./home.style.less').toString()
  ],
  templateUrl: './home.template.html'
})
export class HomeComponent {
  constructor(public appState: AppState) {
  }
}
