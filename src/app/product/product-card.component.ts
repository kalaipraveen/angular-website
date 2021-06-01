import { Component, Injectable, Input} from '@angular/core';
import { Product, ProductService } from './product.service';
import { CartService, CartItem } from '../cart/cart.service'
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'db-product-card',
    templateUrl: './product-card.component.html'

})
@Injectable(

)

export class ProductCardComponent {
    @Input() products: Product;
    @Input() cartItem: CartItem;

        constructor(
        private cartService: CartService,private productService:ProductService) {
        
    }
    setClasses(product: Product) {
        return {
            'card-danger': product.isSpecial,
            'card-inverse': product.isSpecial
        };
    }

   /**  addToCart(product:Product) {
         this.cartService.addProduct(product);
    }*/

}


