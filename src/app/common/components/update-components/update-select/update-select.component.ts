import { Component, Input } from '@angular/core';
import { UpdateComponent } from '../update-component';

@Component({
  selector: 'app-editable-select',
  templateUrl: './update-select.component.html',
  styleUrls: ['./update-select.component.scss']
})
export class UpdateSelectComponent extends UpdateComponent {

  @Input() public options: any[];

}
