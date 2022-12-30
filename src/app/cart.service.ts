import { Injectable } from '@angular/core';
import { Cart, CartItem } from './shared/cart.model';
import { BehaviorSubject } from 'rxjs';
export const CART_KEY = "cart";
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart$: BehaviorSubject<Cart> = new BehaviorSubject(this.getCart());

  constructor() { }

  initCartLocalStorage() {
    const cart: Cart = this.getCart();
    if (!cart) {
      const initialCart = {
        items: []
      };
      const initialCartJson = JSON.stringify(initialCart);
      localStorage.setItem(CART_KEY, initialCartJson);
    }
  }

  getCart(): Cart {
    const cartJsonString: string = localStorage.getItem(CART_KEY);
    const cart: Cart = JSON.parse(cartJsonString);
    return cart;
  }

  setCartItem(cartItem: CartItem): Cart {
    const cart = this.getCart();
    const cartItemExist = cart.Items.find((item) => item.productId === cartItem.productId);
    if (cartItemExist) {
      cart.Items.map(item => {
        if (item.productId === cartItem.productId) {
          item.quantity = item.quantity + cartItem.quantity;
          return item;
        }
        return item;
      })
    }
    else {
      cart.Items.push(cartItem);
    }

    const CartJson = JSON.stringify(Cart);
    localStorage.setItem(CART_KEY, CartJson);
    this.cart$.next(cart);
    return cart;
  }
}
