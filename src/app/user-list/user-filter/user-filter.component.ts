/*
 */
import { Component, Input, ViewEncapsulation, ApplicationRef } from '@angular/core';
import { User } from '../user';
import { FilteringCriteria } from '../filtering-criteria';
import { using } from 'rxjs/observable/using';
/*
 */
@Component({
  selector: 'user-filter-options',
  templateUrl: './user-filter.component.template.html',
  styles: [
    require('./user-filter.style.less')
  ]
})
/**
 * Component responsible for changing {@link FilteringCriteria}
 */
export class UserFilterComponent {
  @Input()
  filter: FilteringCriteria;

  rangeValueChanged(event, type) {
    this.filter['min_' + type] = parseInt(event.startValue, null);
    this.filter['max_' + type] = parseInt(event.endValue, null);
  }
  constructor() {
  }
}
