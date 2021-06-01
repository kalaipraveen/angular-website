import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartMenuComponent } from './cart-menu.component';
import { CartService } from './cart.service';
import {CartViewComponent} from './cart-view.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
      CommonModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule
    ],
    declarations: [
      CartMenuComponent,
      CartViewComponent
    ],
    exports: [
      CartMenuComponent,
      CartViewComponent
    ],
    providers: [CartService]
  })
  export class CartModule {
  }
