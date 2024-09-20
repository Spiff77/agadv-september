import { Injectable } from '@angular/core';
import {delay, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isAuthenticated = false;

  login() {
    this._isAuthenticated = true;
  }

  logout() {
    this._isAuthenticated = false;
  }

  isAuthenticated(): Observable<boolean> {
    return of(this._isAuthenticated)
  }
}
