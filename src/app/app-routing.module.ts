import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { AuthGuard } from './auth.guard';
import { EmptyCartGuard } from './empty-cart.guard';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Redirect to product list
  // {
  //   path: 'profile',
  //   component: UserProfileComponent,
  //   canActivate: [AuthGuard], // Apply the AuthGuard to protect this route.
  // },

  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [EmptyCartGuard], // Apply the EmptyCartGuard to protect this route.
  },
  
  { path: 'products', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },

  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-confirmation', component: OrderConfirmationComponent },
  // { path: '**', redirectTo: '/products', pathMatch: 'full' } ,// Default route for unknown paths
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent } // Updated path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
