import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient, private router: Router,) { }

  public getAllTasks(){
    let url: string = `${environment.api_Url}/`;
    return this.http.get<any>(url)
  }
}
