import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() products: any; // Declare an input property to receive product data from the parent
  product: any;
  productId!: number;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productId = +id;
      this.product = this.productService.getProductById(this.productId.toString()); // Convert productId to striFetch product details
    } else {
      // Handle the case when 'id' is null, e.g., by displaying an error message or redirecting
    }
  }
  

  getProductDetails(productId: string): void {
    this.productService.getProductById(productId).subscribe(product => {
      this.product = product;
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
}
