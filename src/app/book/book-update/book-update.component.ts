import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../shared/book.service';
import { Book } from '../shared/book.model';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss']
})
export class BookUpdateComponent implements OnInit {

  book: Book;
  bookCategories: string[] = Book.CATEGORIES;

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.getBook(params['bookId']);
      });
  }

  getBook(bookId: string) {
    this.bookService.getBookById(bookId).subscribe(
      (book: Book) => {
        this.book = book;
      });
  }

  updateBook(bookId: string, bookData: any) {
    this.bookService.updateBook(bookId, bookData).subscribe(
      (updatedBook: Book) => {
        this.book = updatedBook;
      },
      (errorResponse: HttpErrorResponse) => {
        this.toastr.error(errorResponse.error.errors[0].detail, 'Error. Something goes wrong!!!');
        this.getBook(bookId);
      });
  }
}
