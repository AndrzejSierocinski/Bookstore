import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ManageModule} from './manage/manage.module';
import {RouterModule, Routes} from '@angular/router';
import {BookModule} from './book/book.module';
import {AuthModule} from './auth/auth.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './common/header/header.component';
import {UserModule} from './auth/user.module';

const routes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BookModule,
    AuthModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ManageModule,
    UserModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
