// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  calculateTotal(): number {
    return this.cartService.calculateTotal();
  }

  removeFromCart(product: any): void {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCartItems();
  }

  navigateToCheckout(): void {
    this.router.navigate(['/checkout']);
  }

}
