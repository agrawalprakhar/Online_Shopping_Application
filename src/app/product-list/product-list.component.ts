import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service'; // Import CartService
import { Product } from '../models/product.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  searchQuery: string = '';
  isLoggedIn: boolean = false;

  constructor(private productService: ProductService,private cartService : CartService,private authService: AuthService) {}

  ngOnInit(): void {
    this.getProducts();
    
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert('Product added to cart'); // Display an alert for testing
  }

  searchProducts(): void {
    if (this.searchQuery) {
      this.products = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.getProducts(); // Reset the list if search query is empty
    }
  }
}

