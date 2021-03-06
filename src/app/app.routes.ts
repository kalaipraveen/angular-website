import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {ProductViewComponent} from './product/product-view.component';
import { CartViewComponent } from './cart/cart-view.component';
import { CheckoutViewComponent } from './checkout/checkout.component';
export const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductViewComponent },
    { path: 'cart', component: CartViewComponent },
    { path: 'checkout', component: CheckoutViewComponent }

  ];
  export const routing = RouterModule.forRoot(routes);
  