import { LoggedUserInterface } from './../../shared/interfaces/logged.user.interface';
import {
  LoginInterface,
  LoginJWTResponeInterface,
  RefreshTokenInterface,
  ResetPasswordData,
} from './../../shared/interface/login.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiPath;
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );
  user: BehaviorSubject<LoggedUserInterface> =
    new BehaviorSubject<LoggedUserInterface>({
      authority: '',
      email: '',
      exp: 0,
      first_name: '',
      iat: 0,
      last_name: '',
      sub: '',
    });
  currentAccessToken!: null;

  constructor(private http: HttpClient) {
    const user = !localStorage.getItem('user')? '': localStorage.getItem('user');
    if (localStorage.getItem('user')) {
      this.setUser(JSON.parse(user? user: '' ));
    }
  }

  getAuthToken() {
    const token = localStorage.getItem('token');
    return !token ? '' : token;
  }

  removeAuthToken() {
    localStorage.clear();
  }

  setUser(user: any) {
    this.user.next(user);
  }

  getUser(): LoggedUserInterface {
    return this.user.value;
  }

  login(body: LoginInterface): Observable<LoginJWTResponeInterface> {
    return this.http.post<LoginJWTResponeInterface>(
      `${this.baseUrl}/authentication/authenticate`,
      body
    );
  }

  getRefreshToken() {
    const refreshToken = window.localStorage.getItem('refreshToken');

    return !refreshToken ? '' : refreshToken;
  }
  refTok: string = this.getAuthToken();

  refreshToken(token: {
    jwtRefreshToken: string;
  }): Observable<RefreshTokenInterface> {
    return this.http.post<RefreshTokenInterface>(
      `${this.baseUrl}/authentication/token`,
      {
        jwtRefreshToken: token.jwtRefreshToken,
      }
    );
  }

  changePassword(newPassword: ResetPasswordData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/reset-password`, newPassword);
  }
}
