import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';

const helper = new JwtHelperService();

class DecodedToken {
  exp = 0;
  username = '';
}

@Injectable()
export class AuthService {
  private decodedToken;

  constructor(private http: HttpClient) {

    this.decodedToken = JSON.parse(localStorage.getItem('token')) || new DecodedToken();
  }

  private saveToken(token: string): string {
    this.decodedToken = helper.decodeToken(token);

    localStorage.setItem('authenticated', token);
    localStorage.setItem('token', JSON.stringify(this.decodedToken));

    return token;
  }

  private getExpiration() {
    return moment.unix(this.decodedToken.exp);
  }

  public register(userData: any): Observable<any> {
    return this.http.post('api/v1/users/register', userData);
  }

  public login(userData: any): Observable<any> {
    return this.http.post('api/v1/users/auth', userData).pipe(map(
      (token: string) => this.saveToken(token)));
  }

  public logout() {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('token');

    this.decodedToken = new DecodedToken();
  }

  public isAuthenticated(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  public getAuthToken(): string {
    return localStorage.getItem('authenticated');
  }

  public getUsername(): string {
    return this.decodedToken.username;
  }
  public getUserId(): string {
    return this.decodedToken.userId;
  }
}
