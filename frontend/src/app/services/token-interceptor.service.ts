import { AuthService } from 'src/app/services/auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private auth: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let token = this.auth.getUserToken()

    let jwtToken = req.clone({
      setHeaders: {
        Authorization : 'bearer ' + token
      }
    })
    return next.handle(jwtToken)
  }

}
