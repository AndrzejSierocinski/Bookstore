import {Component, OnInit} from '@angular/core';
import {BookService} from '../shared/book.service';
import {Book} from '../shared/book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  page = 1;
  term: string;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      (books: Book[]) => {
        this.books = books;
      },
      (err) => {
      },
      () => {
      });
  }
}
