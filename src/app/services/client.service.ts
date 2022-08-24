
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { clients } from '../views/admin/client/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl : string="http://localhost:8090/api/user"
 

  constructor(private http:HttpClient) { }
 /*
  {
    return this.http.post("http://localhost:8090/api/user");
  }*/
  /*getClientList(): Observable<clients[]>{
    return this.httpClient.get<clients[]>(`${this.baseUrl}`)};*/
  save(client: clients): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, client);
  }

}