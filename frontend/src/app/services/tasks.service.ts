import { Task } from './../tasks/tasks.component';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient, private router: Router,) { }


  public getAllTasks(): Observable<any>{
    let url: string = `${environment.api_Url}/`;
    return this.http.get<any>(url)
  }

  createTask(task: any) {
    let url: string = `${environment.api_Url}/add`;
    return this.http.post<any>(url, task)
  }


}


