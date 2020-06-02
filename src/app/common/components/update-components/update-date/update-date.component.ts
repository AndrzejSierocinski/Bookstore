import {Component, Input} from '@angular/core';
import {UpdateComponent} from '../update-component';

@Component({
  selector: 'app-editable-date',
  templateUrl: './update-date.component.html',
  styleUrls: ['./update-date.component.scss']
})
export class UpdateDateComponent extends UpdateComponent {

  @Input() type = 'text';

  config = {
    format: 'DD-MM-YYYY',
    firstDayOfWeek: 'mo',
    disableKeypress: true,
    allowMultiSelect: false,
    closeOnSelect: true,
    closeOnSelectDelay: 100,
    onOpenDelay: 0,
    // appendTo: document.body,
    drops: 'down',
    opens: 'right',
    enableMonthSelector: true,
    // // timeSeparator: ':',
    // // multipleYearsNavigateBy: 10,
    showMultipleYearsNavigation: true,
  };

  @Input() transformView = value => value;

}
