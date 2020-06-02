import {Component, Input, OnInit} from '@angular/core';
import {UpdateComponent} from '../update-component';

@Component({
  selector: 'app-input-price',
  templateUrl: './update-price.component.html',
  styleUrls: ['./update-price.component.scss']
})
export class UpdatePriceComponent extends UpdateComponent{
  @Input() type = 'number';

  @Input() transformView = value => value;
}
