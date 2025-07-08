import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from '@app/services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router,
    private us: UserService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Prevent SSR from reading the token
    if (!isPlatformBrowser(this.platformId)) {
      return next.handle(request);
    }

    const token = this.us.getToken()
    
    if (!token) {
      return next.handle(request);
    }

    const authReq = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    });

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Redirect to login or handle unauthorized access
          sessionStorage.clear();
          this.router.navigate(['/login']);
        }
        return throwError(error);
      })
    );
  }
}
