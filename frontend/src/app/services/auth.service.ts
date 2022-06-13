import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private headers = {
      headers: {
        'Content-Type': 'application/json',
      }
    }

  constructor(private http:HttpClient, private router: Router,) { }

  login(email:String, password: String): any{
    let loginUrl = `${environment.api_Url}/login`;

    let data = {
      email: email,
      password:password
    }
    return this.http.post<any>(loginUrl, data, this.headers)
  }

  // Returns true when user is looged in
  isLoggedIn(): boolean{
    const token: String|null = window.localStorage.getItem('token')
    return token === null ? false : true
  }

  storeUserToken(token: string): void{
    localStorage.setItem('token', token);
  }
  getUserToken(): void{
    localStorage.getItem('token');
  }

  navigateToTasks():void {
    this.router.navigateByUrl('/tasks')
  }

  navigateToLogin():void {
    this.router.navigateByUrl('/login')
  }

  register(fullName: String, email: String, password: String): any{
    let registerUrl = `${environment.api_Url}/register`
    let data = {
      fullName: fullName,
      email: email,
      password: password
    }
    return this.http.post<any>(registerUrl, data, this.headers)
  }

  logout(){
    this.http.post<any>(`${environment.api_Url}/logout`, {})
  }

}
