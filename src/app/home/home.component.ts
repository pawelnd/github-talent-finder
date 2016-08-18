import { Component } from '@angular/core';
import { AppState } from '../app.service';

@Component({
  selector: 'home',  // <home></home>
  pipes: [ ],
  styleUrls: [ './home.style.css' ],
  templateUrl: './home.template.html'
})
export class HomeComponent {
  constructor(public appState: AppState) {
  }
}
