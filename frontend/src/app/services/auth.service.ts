import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(email:String, password: String): any{

    return this.http.post<any>(`/login`, {"email": email, "password": password}, { observe: 'response'})
  }
}
