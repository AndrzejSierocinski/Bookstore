import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UpdateComponent } from '../update-component';

@Component({
  selector: 'app-editable-input',
  templateUrl: './update-input.component.html',
  styleUrls: ['./update-input.component.scss']
})
export class UpdateInputComponent extends UpdateComponent  {

  @Input() type = 'text';

  @Input() transformView = value => value;
}
