/*
 */
import { Component, Input, ViewEncapsulation, ApplicationRef } from '@angular/core';
import {User} from "../user";
import {FilteringCriteria} from "../filtering-criteria";
import {using} from "rxjs/observable/using";
/*
 */
@Component({
  selector: 'user-filter-options',
  templateUrl: './user-filter.component.template.html',
  styles: [
    require('./user-filter.style.less')
  ]
})
export class UserFilterComponent {
  constructor(
    private appRef: ApplicationRef) {
  }
  @Input()
  filter:FilteringCriteria;

  ngOnInit() {

  }

  rangeValueChanged(event, type) {
    this.filter['min_'+type] = parseInt(event.startValue);
    this.filter['max_'+type] = parseInt(event.endValue);
    this.appRef.tick(); // this should be added to slider lib, but it is not
  }
}
