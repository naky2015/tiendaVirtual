import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProducsArray, Product } from '../interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
_http= inject(HttpClient)
urlBase = "https://sistemadeventas.com.ar/api"

getProducts():Observable<ProducsArray>{
 return this._http.get<ProducsArray>(this.urlBase + "/productos")
}

getIndividualProduct(id: number): Observable<ProducsArray>{
  return this._http.get<ProducsArray>(`${this.urlBase}/productos?linkTo=id_producto&equalTo=${id}`)
}
getPrductsByName(name: string){
   return this._http.get(`${this.urlBase}/productos?linkTo=producto&like=${name}`)
}

}
