import {Component, OnInit} from '@angular/core';
import {Cart, CartService, CartItem} from "./cart.service";


@Component({
  selector: 'db-cart-view',
  templateUrl: './cart-view.component.html',
})
export class CartViewComponent implements OnInit {
  cart: Cart;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cart = this.cartService.cart
  }

  update(value, item: CartItem) {
    let res = value - item.count;

    if (res > 0) {
      for (let i = 0; i < res; i++) {
        this.cartService.addProduct(item.product);
      }
    } else if (res < 0) {
      for (let i = 0; i < -res; i++) {
        this.cartService.removeProduct(item.product);
      }
    }
    return value;
  }

  deleteItem(item) {
    this.cartService.removeItem(item);
  }

  clearCart() {
    this.cartService.clearCart();
  }

}
