import {Component, OnInit} from '@angular/core';
import {Book} from '../shared/book.model';
import {BookService} from '../shared/book.service';

import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {

  constructor(private bookService: BookService,
              private router: Router) {
  }

  newBook: Book;
  bookCategories = Book.CATEGORIES;
  errors: any[] = [];

  config = {
    format: 'DD-MM-YYYY',
    firstDayOfWeek: 'mo',
    disableKeypress: true,
    allowMultiSelect: false,
    closeOnSelect: true,
    closeOnSelectDelay: 100,
    onOpenDelay: 0,
    // appendTo: document.body,
    drops: 'down',
    opens: 'right',
    enableMonthSelector: true,
    // // timeSeparator: ':',
    // // multipleYearsNavigateBy: 10,
    showMultipleYearsNavigation: true,
  };

  ngOnInit() {
    this.newBook = new Book();
  }

  handleImageUpload(imageUrl: string) {
    this.newBook.image = imageUrl;
  }

  handleImageError() {
    this.newBook.image = '';
  }

  createBook() {
    this.bookService.createBook(this.newBook).subscribe(
      (book: Book) => {
        this.router.navigate([`/books/${book._id}`]);
      },
      (errorResponse: HttpErrorResponse) => {
        this.errors = errorResponse.error.errors;
      });
  }
}
