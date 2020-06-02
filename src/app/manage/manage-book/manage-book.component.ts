import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import {Book} from '../../book/shared/book.model';
import {BookService} from '../../book/shared/book.service';

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.scss']
})
export class ManageBookComponent implements OnInit {

  books: Book[];
  bookDelete: number;
  page = 1;
  term: string;
  constructor(private bookService: BookService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.bookService.getUserBooks().subscribe(
      (books: Book[]) => {
        this.books = books;
      },
      () => {

      });
  }


  deleteBook(bookId: string) {
    this.bookService.deleteBook(bookId).subscribe(
      () => {
        this.books.splice(this.bookDelete, 1);
        this.bookDelete = undefined;
      },
      (errorResponse: HttpErrorResponse) => {
        this.toastr.error(errorResponse.error.errors[0].detail, 'Failed!');
      });
  }

}
