import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../views/admin/category';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private baseURL = "http://localhost:8090/category";

  constructor(private httpClient:HttpClient) { }
  fetchTicketList(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(`${this.baseURL}/categories`);
  }
}
