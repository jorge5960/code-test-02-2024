import {
    HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor,
    HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, delay, throwError } from "rxjs";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request)
            .pipe(
                delay(Math.floor(Math.random() * 2000)), /* To simulate delay on server */
                catchError((error: HttpErrorResponse) => {
                    alert(error.message);
                    return throwError(() => error)
                })
            )
    }
}