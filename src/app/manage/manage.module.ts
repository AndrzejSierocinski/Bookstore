import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgPipesModule } from 'ngx-pipes';

import { ManageComponent } from './manage.component';

import {DateFormatPipe} from '../common/pipes/format-date.pipe';


import { AuthGuard } from '../auth/shared/auth.guard';
import {BookService} from '../book/shared/book.service';
import {ManageBookComponent} from './manage-book/manage-book.component';
import {FormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  {
    path: 'manage',
    component: ManageComponent,
    children: [
      {path: 'books', component: ManageBookComponent, canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  declarations: [
    ManageComponent,
    ManageBookComponent,
    DateFormatPipe
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgPipesModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  exports: [
    DateFormatPipe
  ],
  providers: [
    BookService,
  ]
})
export class ManageModule { }
