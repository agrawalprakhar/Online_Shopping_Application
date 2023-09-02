import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CartService } from './cart.service'; // Assuming you have a CartService for managing the cart.

@Injectable({
  providedIn: 'root',
})
export class EmptyCartGuard implements CanActivate {
  constructor(private cartService: CartService, private router: Router) {}

  canActivate(): boolean {
    // Step 2.3.1: Check if the cart is empty using a method from your CartService.
    if (this.cartService.isCartEmpty()) {
      // Step 2.3.2: If the cart is empty, prevent access to the checkout page.
      // You can also choose to redirect the user to a different page (e.g., product listing) or display a message.
      this.router.navigate(['/products']); // Redirect to a different page.
      return false; // Prevent access to the route.
    } else {
      // Step 2.3.3: If the cart has items, allow access to the checkout page.
      return true; // Allow access to the route.
    }
  }
  
}
