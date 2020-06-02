import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NgPipesModule, UcWordsPipe} from 'ngx-pipes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UpdateModule} from '../common/components/update-components/update.module';
import {ImageUploadModule} from '../common/components/image-upload/image-upload.module';

import {BookListComponent} from './book-list/book-list.component';
import {BookListItemComponent} from './book-list-item/book-list-item.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookDetailBookingComponent} from './book-detail/book-detail-booking/book-detail-booking.component';

import {BookService} from './shared/book.service';

import {AuthGuard} from '../auth/shared/auth.guard';

import {BookCreateComponent} from './book-create/book-create.component';
import {BookUpdateComponent} from './book-update/book-update.component';
import {ManageModule} from '../manage/manage.module';
import {BookComponent} from './book.component';
import {BookGuard} from './shared/book.guard';
import {DateFormatPipe} from '../common/pipes/format-date.pipe';
import {DpDatePickerModule} from 'ng2-date-picker';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  {
    path: 'books',
    component: BookComponent,
    children: [
      {path: '', component: BookListComponent},
      {path: 'new', component: BookCreateComponent, canActivate: [AuthGuard]},
      {path: ':bookId/edit', component: BookUpdateComponent, canActivate: [AuthGuard, BookGuard]},
      {path: ':bookId', component: BookDetailComponent}
    ]
  }
];

@NgModule({
  declarations: [
    BookListComponent,
    BookListItemComponent,
    BookComponent,
    BookDetailComponent,
    BookDetailBookingComponent,
    BookCreateComponent,
    BookUpdateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    NgPipesModule,
    FormsModule,
    UpdateModule,
    ImageUploadModule,
    ManageModule,
    DpDatePickerModule,
    NgSelectModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [
    BookService,
    UcWordsPipe,
    BookGuard,
    DateFormatPipe
  ]
})
export class BookModule {
}
