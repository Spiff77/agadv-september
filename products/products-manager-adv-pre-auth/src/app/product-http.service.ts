import { Injectable } from '@angular/core';
import {Product} from './model/Product';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {environment as env} from '../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  private apiUrl = env.apiUrl + 'products';

  constructor(private http: HttpClient) { }

  add(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiUrl, product);
  }

  delete(productId: number): Observable<any>{
    return this.http.delete<Product>(this.apiUrl + '/' + productId);
  }

  update(product: Product): Observable<Product>{
    return this.http.put<Product>(this.apiUrl + '/' + product.id, product);
  }

  findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  findOne(id: number): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + '/' + id);
  }
}
