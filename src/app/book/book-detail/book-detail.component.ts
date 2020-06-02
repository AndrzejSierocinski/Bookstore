import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../shared/book.service';
import {Book} from '../shared/book.model';
import {HttpErrorResponse} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  book: Book;
  books: Book[];
  bookDelete = true;
  constructor(private route: ActivatedRoute,
              private router: Router,
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

  deleteBook(bookId: string) {
    this.bookService.deleteBook(bookId).subscribe(
      () => {
        this.bookDelete = true;
        this.router.navigate(['/books']);
      },
      (errorResponse: HttpErrorResponse) => {
        this.toastr.error(errorResponse.error.errors[0].detail, 'Failed!');
      });
  }

}
