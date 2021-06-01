import { Component, Injectable, Input } from '@angular/core';
import { Cart, CartService } from './cart.service';
@Component({
    selector: 'db-cart-menu',
    templateUrl: './cart-menu.component.html'
})
@Injectable()
export class CartMenuComponent {
    public  cart: Cart;
    constructor(private cartService: CartService) {
        this.cart = this.cartService.cart;
    }
}