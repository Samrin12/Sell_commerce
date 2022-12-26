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

  // getProducts() {
  //   return this.products;
  // }

}
