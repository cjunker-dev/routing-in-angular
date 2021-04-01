import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl: string = "http://localhost:8080/api/users/";
  constructor(
    private http: HttpClient
  ) { }
  login(username: string, password: string): Observable<User>{
    return this.http.get(`${this.baseurl}?username=${username}&password=${password}`) as Observable<User>;
  }
  list(): Observable<User[]>{
    return this.http.get(`${this.baseurl}`) as Observable<User[]>;
  }
  get(id: number): Observable<User>{
    return this.http.get(`${this.baseurl}${id}`) as Observable<User>;
  }
  create(user: User): Observable<User>{
    return this.http.post(`${this.baseurl}`, user) as Observable<User>;
  }
  update(user: User): Observable<User>{
    return this.http.put(`${this.baseurl}`, user) as Observable<User>;
  }
  delete(user: User): Observable<User>{
    return this.http.delete(`${this.baseurl}${user.id}`) as Observable<User>;
  }

}
