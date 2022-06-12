import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private headers = {
      headers: {
        'Content-Type': 'application/json'
      }
    }


    label:string = "";
    dueDate:Date = new Date();
    description:string = "";
    type:string = "";
    completed: Boolean = false;

  constructor(private http:HttpClient, private router: Router, public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '250px',
      data: { label: this.label, dueDate: this.dueDate, descriptoin: this.description,type: this.type, completed: this.completed}
    });
    dialogRef.afterClosed().subscribe(res => {
      this.label = res;
    });
  }

  login(email:String, password: String): any{
    let loginUrl = `${environment.api_Url}/login`;

    let data = {
      email: email,
      password:password
    }
    return this.http.post<any>(loginUrl, data, this.headers)
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean{
    const token: String = window.localStorage.getItem('token')!
    return token !== 'null' ? false : true
  }

  storeUserToken(token: string): void{
    localStorage.setItem('token', token);
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
