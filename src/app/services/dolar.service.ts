import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DolarService {

  constructor(private http: HttpClient) { }

  listDolars():Observable<any>{
    return this.http.get<any>('https://dolarapi.com/v1/dolares')
  }
}
