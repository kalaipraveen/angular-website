import {Component, OnInit} from '@angular/core';
import {Cart, CartService} from "../cart/cart.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'db-checkout-view',
  templateUrl: './checkout.component.html',
  
})
export class CheckoutViewComponent implements OnInit {

  term: boolean;
  cart: Cart;
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private cartService: CartService) {
    this.cart = this.cartService.cart
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: []
    })
  }

  onSubmit() {
    alert('Submitted');
    this.cartService.clearCart();
    this.form.reset();
    this.router.navigate(['/welcome'])
  }
}
