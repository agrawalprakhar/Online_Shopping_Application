import { Injectable } from '@angular/core';
import { Product } from './models/product.model'; // Import your Product model
import { Order } from './models/order.model'; // Import your Order model
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  [x: string]: any;
  private cartItems: Product[] = [];
  private orders: Order[] = [];
  
  private orderHistory: Order[] = [];

  private cartSubject = new BehaviorSubject<Product[]>(this.cartItems);
  cartItems$ = this.cartSubject.asObservable();

  private ordersSubject = new BehaviorSubject<Order[]>(this.orders);
  orders$ = this.ordersSubject.asObservable();

  constructor() {}

  addToCart(product: Product): void {
    this.cartItems.push(product);
    this.cartSubject.next(this.cartItems);
  }

  removeFromCart(product: Product): void {
    const index = this.cartItems.findIndex(item => item.id === product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.cartSubject.next(this.cartItems);
    }
  }
  isCartEmpty(): boolean {
    // Implement the logic to check if the cart is empty.
    return this.cartItems.length === 0;
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, product) => total + product.price, 0);
  }

  // Method to get an order by its ID
  getOrderById(orderId: number): Order | null {
    const order = this.orders.find(order => order.id === orderId);
    return order || null;
  }
}
