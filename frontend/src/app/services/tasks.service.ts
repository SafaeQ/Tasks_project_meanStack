import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http:HttpClient) { }


  public getAllTasks(): Observable<any>{
    let url: string = `${environment.api_Url}/`;
    return this.http.get<any>(url)
  }

  createTask(task: any) {
    let url: string = `${environment.api_Url}/add`;
    return this.http.post<any>(url, task)
  }

  updateData(data: any, id: string): Observable<any> {
    let url: string = `${environment.api_Url}/${id}`
    return this.http.patch(url, data)
  }

  deleteData(id: string): Observable<any> {
    let url: string = `${environment.api_Url}/${id}`;
    return this.http.delete(url)
  }
}


