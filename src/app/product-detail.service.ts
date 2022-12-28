import { Injectable } from '@angular/core';
import { product } from './shared/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private http: HttpClient) { }
  // private products: product[] = [
  //   { no: 2, name: 'Cabbage', price: '30 BDT/KG', category: 'vegetable', imagePath: 'assets/images/p1.png', psc: '01', desc: 'Good Product', countInStock: 4, isBest: 'true', dateCreated: '2022-11-12', origin: 'bd' }

  // ];

  // postPorduct(product: product): Observable<product> {
  //   return this.http.post<product>("http://localhost:3000/api/v1/products/", product)
  // }
  getProducts(): Observable<product[]> {
    return this.http.get<product[]>('http://localhost:3000/api/v1/products/');
  }
  getOneProduct(id: string): Observable<product> {
    return this.http.get<product>('http://localhost:3000/api/v1/products/' + id);
  }
  createProduct(product: product) {
    return this.http.post('http://localhost:3000/api/v1/products/', product);
  }
  updateProduct(product: product) {
    return this.http.put('http://localhost:3000/api/v1/products/' + product.id, product);
  }
  deleteProduct(id: string): Observable<Object> {
    return this.http.delete<object>(`http://localhost:3000/api/v1/products/${id}`)
  }

  // getProducts() {
  //   return this.products;
  // }

}
