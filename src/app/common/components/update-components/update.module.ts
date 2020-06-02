import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageUploadModule } from '../image-upload/image-upload.module';

import { UpdateInputComponent } from './update-input/update-input.component';
import { UpdateTextareaComponent } from './update-textarea/update-textarea.component';
import { UpdateSelectComponent } from './update-select/update-select.component';
import { UpdateImageComponent } from './update-image/update-image.component';
import { UpdateDateComponent } from './update-date/update-date.component';
import {ManageModule} from '../../../manage/manage.module';
import { UpdatePriceComponent } from './update-price/update-price.component';
import {DpDatePickerModule} from 'ng2-date-picker';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ImageUploadModule,
    ManageModule,
    DpDatePickerModule,
    NgSelectModule
  ],
    exports: [
        UpdateInputComponent,
        UpdateTextareaComponent,
        UpdateSelectComponent,
        UpdateImageComponent,
        UpdateDateComponent,
        UpdatePriceComponent
    ],
  declarations: [
    UpdateInputComponent,
    UpdateTextareaComponent,
    UpdateSelectComponent,
    UpdateImageComponent,
    UpdateDateComponent,
    UpdatePriceComponent
  ]
})
export class UpdateModule {}
