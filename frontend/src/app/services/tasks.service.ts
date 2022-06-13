import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient, private router: Router,) { }

  public getAllTasks(){

    const httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': ''
    })
    let url: string = `${environment.api_Url}/`;
    return this.http.get<any>(url, {headers: httpHeaders})
  }
}
