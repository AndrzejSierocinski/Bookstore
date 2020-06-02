import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookService {

  constructor(private http: HttpClient) {}

  public getBookById(bookId: string): Observable<any> {
    return this.http.get('/api/v1/books/' + bookId);
  }

  public getBooks(): Observable<any> {
    return this.http.get('/api/v1/books');
  }
  public createBook(book: Book): Observable<any> {
    return this.http.post('/api/v1/books', book);
  }

  public getUserBooks(): Observable<any> {
    return this.http.get('/api/v1/books/manage');
  }

  public deleteBook(bookId: string): Observable<any> {
    return this.http.delete(`/api/v1/books/${bookId}`);
  }

  public updateBook(bookId: string, bookData: any): Observable<any> {
    return this.http.patch(`/api/v1/books/${bookId}`, bookData);
  }

  public verifyBookUser(bookId: string): Observable<any> {
    return this.http.get(`/api/v1/books/${bookId}/verify-user`);
  }
}
