import {of as observableOf, Observable} from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {BookService} from './book.service';

@Injectable()
export class BookGuard implements CanActivate {

  constructor(private bookService: BookService,
              private router: Router) {
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    const bookId: string = route.params.bookId;

    return this.bookService.verifyBookUser(bookId).pipe(map(() => {
        return true;
      }), catchError(() => {
        this.router.navigate(['/books']);
        return observableOf(false);
      }),
    );
  }
}
