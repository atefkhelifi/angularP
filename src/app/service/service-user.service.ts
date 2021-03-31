import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ServiceUserService {

  apiURL = 'http://localhost:8088/api/v1/users';

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User> {
    return this.http.get<User>(this.apiURL )
    
  }
 
  createUser(user:any): Observable<User> {
    return this.http.post<User>(this.apiURL + '/add', JSON.stringify(user), this.httpOptions)
  
  }

  deleteUser(id:any){
    return this.http.delete<User>(this.apiURL+'/delete/'+id)
    
  }
  getUser(id:any): Observable<User> {
    return this.http.get<User>(this.apiURL + '/user/' + id)
  }  
  updateEmployee(id:any, user:any): Observable<User> {
    return this.http.put<User>(this.apiURL + '/update/' + id, JSON.stringify(user), this.httpOptions)
    
  }

}


