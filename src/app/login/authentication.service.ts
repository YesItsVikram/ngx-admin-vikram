import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://example.com/auth'; // Replace with your backend API URL
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const loginData = { password };
    // return this.http.post(`${this.apiUrl}/login`, loginData);
    const isAuth = password === 'Upwards@1298';

    if(isAuth)
    this.saveToken('very unsafe')

    return new Observable((subscriber) => subscriber.next(isAuth))
  }

  saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
