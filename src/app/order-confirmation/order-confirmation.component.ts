import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  order: Order | null = null; // Initialize as null or use your Order model type

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // Assuming you have a query parameter to identify the order
      const orderId = params['orderId']; // Adjust this based on your actual parameter name

      // You might fetch order details based on the orderId from an API
      // For now, let's simulate it using the cart service
      this.order = this.cartService.getOrderById(orderId);
    });
  }
}
