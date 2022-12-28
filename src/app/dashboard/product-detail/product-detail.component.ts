import { Component, OnDestroy, OnInit } from '@angular/core';
import { product } from 'src/app/shared/product.model';
import { ProductDetailService } from 'src/app/product-detail.service';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductDetailService]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: product;
  endSubs$: Subject<any> = new Subject();
  // this.productDetailService.getProducts();
  constructor(private Service: ProductDetailService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      if (params.id) {
        this.fetchProd(params.id);
      }
    })
  }
  ngOnDestroy(): void {
    // this.endSubs$.next();
    this.endSubs$.complete();
  }
  private fetchProd(id: string) {
    this.Service.getOneProduct(id).pipe(takeUntil(this.endSubs$)).subscribe(resProduct => {
      this.product = resProduct;
    })
  }
}
