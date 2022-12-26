import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/shared/product.model';
import { ProductDetailService } from 'src/app/product-detail.service';

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.css'],
  providers: [ProductDetailService]
})

export class ProductCardListComponent {
  constructor(private route: Router, private productDetailService: ProductDetailService) {

  }
  products: product[] = [];

  ngOnInit(): void {
    this.productDetailService.getProducts().subscribe(prod => {
      this.products = prod;
    })
  }


  goToDetail() {
    this.route.navigate(['detail']);
  }
}
