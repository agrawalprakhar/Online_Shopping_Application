import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary form-related classes
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup; // Declare the checkout form

  constructor(
    private formBuilder: FormBuilder, // Inject the form builder
    private cartService: CartService
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required], // Add address field
      phone: ['', Validators.required],   // Add phone field
      // ... other form controls
    });
  }

  ngOnInit(): void {}

  placeOrder(): void {
    if (this.checkoutForm.valid) {
      // Form is valid, proceed with order placement
      const orderData = {
        shippingDetails: this.checkoutForm.value,
        items: this.cartService.getCartItems()
      };

      // Simulate order placement (replace with API call)
      console.log('Placing order:', orderData);
      alert("Order is Placed");

      // Clear the cart after placing the order
      this.cartService.clearCart();

      // Navigate to the order confirmation page
      // this.router.navigate(['/order-confirmation']);
    } else {
      // Form is invalid, show validation errors
      this.markFormGroupTouched(this.checkoutForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}

