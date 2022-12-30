import { Component, OnInit, AfterViewInit, ViewChild, enableProdMode } from '@angular/core';
import { product } from '../shared/product.model'
import { Router } from '@angular/router';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { CartService } from '../cart.service';
import { CartItem, CartItemsDetailed } from '../shared/cart.model';
import { ProductDetailService } from '../product-detail.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItemsDetailed: CartItemsDetailed[] = [];
  constructor(private cartService: CartService, private route: Router, private productService: ProductDetailService) {

  }



  ngOnInit(): void {
    this.getCartDetail();
  }
  private getCartDetail() {
    this.cartService.cart$.pipe().subscribe(respCart => {
      respCart.Items.forEach((cartItem) => {
        this.productService.getOneProduct(cartItem.productId).subscribe((respProduct) => {
          this.cartItemsDetailed.push({
            product: respProduct,
            quantity: cartItem.quantity
          })
        });
      })
    })
  }
  deleteCartItem() {

  }

}
