import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { FooterComponent } from '../app/footer/footer.componet';
import { WelcomeComponent } from './welcome/welcome.component';
import { CheckoutViewComponent } from './checkout/checkout.component';

import {
  LocationStrategy, HashLocationStrategy
} from '@angular/common';
import { routing } from './app.routes';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent,
    WelcomeComponent, CheckoutViewComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CategoryModule,
    ProductModule,
    routing,
    CartModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
