import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http:HttpClient) { }

  login(email:String, password: String): any{
    let loginUrl = `${environment.URL}/login`;

    let data = {
      email: email,
      password:password
    }

    return this.http.post<any>(loginUrl, data, this.headers)
  }
}
