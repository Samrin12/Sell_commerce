import { Component } from '@angular/core';
import { product } from '../product.model';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.css']
})
export class ProductCardListComponent {
  products: product[] = [
    new product('Carrot', '70 BDT/KG', 'assets/images/p2.png'),
    new product('Cabbage', '30 BDT/KG', 'assets/images/p1.png'),
    new product('broccoli', '40 BDT/KG', 'assets/images/p3.png'),
    new product('broccoli', '40 BDT/KG', 'assets/images/p3.png'),
    new product('broccoli', '40 BDT/KG', 'assets/images/p3.png')
  ];
}
