import { Component, Input } from '@angular/core';
import { UpdateComponent } from '../update-component';

@Component({
  selector: 'app-editable-textarea',
  templateUrl: './update-textarea.component.html',
  styleUrls: ['./update-textarea.component.scss']
})
export class UpdateTextareaComponent extends UpdateComponent {

  @Input() rows: string;

  @Input() cols: string;
}
