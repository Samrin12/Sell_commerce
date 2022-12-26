import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/shared/product.model';
import { ProductDetailService } from 'src/app/product-detail.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductDetailService]
})
export class ProductDetailComponent {
  products: product[] = []
  // this.productDetailService.getProducts();
  constructor(private productDetailService: ProductDetailService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.products = this.productDetailService.getProducts();
    // let productNo = this.activeRoute.snapshot.paramMap.get('no');
    // console.warn(productNo);
    // productNo && this.productDetailService.getProducts(productNo).subscribe((result) => {

    // })

  }

}
