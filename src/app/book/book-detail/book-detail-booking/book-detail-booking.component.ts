import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

import {Book} from '../../shared/book.model';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-book-detail-booking',
  templateUrl: './book-detail-booking.component.html',
  styleUrls: ['./book-detail-booking.component.scss']
})
export class BookDetailBookingComponent implements OnInit {

  @Input() book: Book;
  ngOnInit(): void {
  }
}
