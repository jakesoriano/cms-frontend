import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private location: Location,) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError(err => {
        const error = err.error.message || err.statusText;

        if (err.status === 403 && error === "Token not valid") {
          this.router.navigate(["/"]);
        }

        return throwError(error);
      })
    );
  }
}
