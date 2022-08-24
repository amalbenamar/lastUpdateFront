import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Priority } from '../views/admin/priority';

@Injectable({
  providedIn: 'root'
})
export class PriorityService {

  private baseURL = "http://localhost:8090/priority";

  constructor(private httpClient:HttpClient) { }
  fetchTypeList(): Observable<Priority[]>{
    return this.httpClient.get<Priority[]>(`${this.baseURL}/priorities`);
  }
}
