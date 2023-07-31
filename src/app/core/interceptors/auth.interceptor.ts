import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../services/auth.service';

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import {
  Observable,
  BehaviorSubject,
  catchError,
  throwError as observableThrowError,
} from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
type AuthRequest = HttpRequest<any>;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  isRefreshingToken: boolean = false;
  tokenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private baseUrl = environment.apiPath;
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService.getAuthToken()) {
      return next.handle(this.addToken(request)).pipe(
        catchError((err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.authService.getRefreshToken;
            } else if (err.status === 400) {
              this.router.navigate(['login-page']);
              this.toastr.error('Błędne dane');
            } else if (err.status === 500) {
              this.router.navigate(['login-page']);
              this.toastr.error('Brak odpowiedzi serwera');
            }

          }
          return observableThrowError(err);
        })
      );
    } else {
      return next.handle(request).pipe(
        catchError((error) => {
          if (
            error instanceof HttpErrorResponse &&
            (error as HttpErrorResponse).status === 400
          ) {
          }
          return observableThrowError(error);
        })
      );
    }
  }

  addToken(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getAuthToken()}`,
      },
    });
  }

  logoutUser() {
    localStorage.clear();
    this.router.navigate(['login-page']);
  }
}
