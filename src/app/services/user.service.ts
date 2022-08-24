import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../views/admin/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = "http://localhost:8090/api/user";

  constructor(private httpClient: HttpClient) { }

  fetchUserList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}/users`);
  }
  fetchUserListByRole(role_id: number): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}/users/${role_id}`);
  }
  saveUserByRole(user: User, role_id: number): Observable<Object>{
    return this.httpClient.post<User>(`${this.baseURL}/users/${role_id}/add-new`, user);
  }
 

  findById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  updateUser(id:any,data:any){
    return this.httpClient.put<User>(`${this.baseURL}/${id}`,data)
  }
  
  
    delete(id: number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
}


