import { HttpErrorResponse, HttpEvent, HttpEventType, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AppConfig } from '../models/app-config';

export const appHtppInterceptor: HttpInterceptorFn = (req, next) => {
  let appConfig = inject(AppConfig);
  let authService: AuthService = inject(AuthService);
  let router: Router = inject(Router);

  let token = authService.getLocalToken();

  let _url = req.url.indexOf('http') === 0 ? req.url : `${appConfig.apiBaseUrl}/${req.url}`;


  req = req.clone({
    //url: `${environment.apiBaseUrl}/${req.url}`,
    url: _url,//`${appConfig.apiBaseUrl}/${req.url}`,
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(req).pipe(
    catchError((erorr) => {
      if ([401, 403].includes(erorr.status)) {
        authService.removeLocalToken();
        router.navigate(['login']);
      }
      return throwError(() => new Error(erorr.erorr?.message || erorr.statusText))
    })
  );
};
