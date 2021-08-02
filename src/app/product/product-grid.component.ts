import { Component, Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService, Product } from './product.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'db-product-grid',
  templateUrl: './product-grid.component.html',
  providers: [CartService],
})
@Injectable()
export class ProductGridComponent {
  productsRow: any;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe((params) => {
      let category: string = params['category'];
      let search: string = params['search'];
      let products: Product[] = this.productService.getProducts(
        category,
        search
      );
      this.productsRow = this.transformProducts(products);
    });
  }
  transformProducts(products: Product[]) {
    let index = 0;
    let length = products.length;
    let productsRow = [];

    //split array 3in row
    while (length) {
      let row: Product[] = [];
      if (length >= 3) {
        for (let i = 0; i < 3; i++) {
          row.push(products[index++]);
        }
        productsRow.push(row);
        length -= 3;
      } else {
        for (; length > 0; length--) {
          row.push(products[index++]);
        }
        productsRow.push(row);
      }
    }
    return productsRow;
  }
}
