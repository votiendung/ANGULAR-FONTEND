import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../../model/product';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + `/products`);
  }
  createNewProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(API_URL + `/products`, product);
  }
  getProductById(id: number): Observable<Product> {
    return  this.http.get<Product>(API_URL + `/products/${id}`);
  }
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(API_URL + `/products/${id}`, product);
  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(API_URL + `/products/${id}`);
  }
}
