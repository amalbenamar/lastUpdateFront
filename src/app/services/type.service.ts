import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeTicket } from '../views/admin/type-ticket';


@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private baseURL = "http://localhost:8090/type";

  constructor(private httpClient:HttpClient) { }
  fetchTypeList(): Observable<TypeTicket[]>{
    return this.httpClient.get<TypeTicket[]>(`${this.baseURL}/types`);
  }
}
