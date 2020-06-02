import { Component, OnInit } from '@angular/core';
import { UpdateComponent } from '../update-component';

@Component({
  selector: 'app-editable-image',
  templateUrl: './update-image.component.html',
  styleUrls: ['./update-image.component.scss']
})
export class UpdateImageComponent extends UpdateComponent {

  handleImageUpload(imageUrl: string) {
    this.entity[this.entityField] = imageUrl;
    this.updateEntity();
  }


  handleImageError() {
    this.cancelUpdate();
  }

  handleImageLoad() {
    this.isActiveInput = true;
  }
}
