import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }

  url: string = `${environment.api_Url}/`

  getAllTasks(): Observable<any>{
    return this.http.get<any>(this.url)
  }

  createTask(task: any) {
    return this.http.post<any>(this.url + '/add', task)
  }

  updateTask(id: string,data: any): Observable<any> {
    return this.http.put(this.url + id, data)
  }

  find(id: string): Observable<any>{
    return this.http.get(this.url + id)
  }

  deleteData(id: string): Observable<any> {
    return this.http.delete(this.url + id)
  }
}


