import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './interfaces/users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  getUsers():Observable<Users>{
    return this.http.get<Users>('https://api.escuelajs.co/api/v1/users')
  }

  getUser(id: number): Observable<Users>{
    return this.http.get<Users>(`https://api.escuelajs.co/api/v1/users/${id}`)
  }
  
}
