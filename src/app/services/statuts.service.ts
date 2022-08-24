import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statuts } from '../views/admin/statuts';

@Injectable({
  providedIn: 'root'
})
export class StatutsService {

  private baseURL = "http://localhost:8090/status-of-ticket";

  constructor(private httpClient:HttpClient) { }
  fetchStatusOfTicketList(): Observable<Statuts[]>{
    return this.httpClient.get<Statuts[]>(`${this.baseURL}/status-of-tickets`);
  }
}
