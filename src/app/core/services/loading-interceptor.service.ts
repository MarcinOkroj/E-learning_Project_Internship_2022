import { LoadingService } from './../services/loading.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoadingInterceptorService implements HttpInterceptor {
  activeRequest: number = 0;

  constructor(private loadingScreanService: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.activeRequest === 0) {
      this.loadingScreanService.startLoading();
    }
    this.activeRequest++;

    return next.handle(request).pipe(
      finalize(() => {
        this.activeRequest--;
        if (this.activeRequest === 0) {
          this.loadingScreanService.stopLoading();
        }
      })
    );
  }
}
