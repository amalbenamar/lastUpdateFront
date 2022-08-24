import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Tickets } from '../views/admin/ajouter-ticket/tickets';
import { User } from '../views/admin/user';
@Injectable({
  providedIn: 'root'
})
export class TicketService {
  user:User[] =[];
  
  user_:User={
  id:'',
  firstName:'',
  lastName:'',
  email:'',
  adress:'',
  phone_number:'',
  password:'',
  role:''
}

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  })
};
  private baseURL = "http://localhost:8090/ticket";
  constructor(private httpClient:HttpClient) { }

  
  fetchTicketList(): Observable<Tickets[]>{
    return this.httpClient.get<Tickets[]>(`${this.baseURL}/tickets`);
  }
  findById(id: number): Observable<Tickets>{
    return this.httpClient.get<Tickets>(`${this.baseURL}/${id}`).pipe(
      map((ticket:Tickets)=>ticket));
  }
  // fetchTicketListByAssignedTo(): Observable<Tickets[]>{
  //   return this.httpClient.get<Tickets[]>(`${this.baseURL}/tickets/assignedto/${this.user_.id}`);
  // }

  
  delete(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  public getTicket(): Observable<Tickets[]> {
    return this.httpClient.get<Tickets[]>(`${this.baseURL}`);
  }

  public addTicket(ticket: Tickets): Observable<Tickets> {
    return this.httpClient.post<Tickets>(`${this.baseURL}`, JSON.stringify(ticket),this.httpOptions);
  }

  public editTicket(ticket: Tickets): Observable<Tickets> {
    return this.httpClient.put<Tickets>(`${this.baseURL}/${ticket.id}`, JSON.stringify(ticket),this.httpOptions);
  }
}
