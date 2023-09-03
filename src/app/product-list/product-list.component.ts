import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service'; // Import CartService
import { Product } from '../models/product.model';
import { AuthService } from '../auth.service';
import { FormBuilder,FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  selectedProduct: any; // Property to store the selected product
  @Output() productSelected = new EventEmitter<any>(); // Create an event emitter
  products: Product[] = [];
  searchQuery: string = '';
  isLoggedIn: boolean = false;
  filterSortForm !: FormGroup;
  constructor(private productService: ProductService,private cartService : CartService,private authService: AuthService,private formBuilder: FormBuilder,private router:Router) {
    this.filterSortForm = this.formBuilder.group({
      category: [''], // Initial value for the category control
      sortBy: ['price'], // Initial value for the sortBy control
    });
  }

  ngOnInit(): void {
    this.getProducts();
    
    // Initialize the filter and sort form
  this.filterSortForm = new FormGroup({
    category: new FormControl(''), // Initialize with an empty value
    sortBy: new FormControl('price') // Default sorting option
  });
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products

     

    });
  }
  
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert('Product added to cart'); // Display an alert for testing
  }

  searchProducts(): void {
    if (this.searchQuery) {
      this.products = this.products.filter(product =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.getProducts(); // Reset the list if search query is empty
    }
  }
  applyFilters(): void {
    const categoryControl = this.filterSortForm.get('category');
const sortByControl = this.filterSortForm.get('sortBy');

const category = categoryControl ? categoryControl.value : '';
const sortBy = sortByControl ? sortByControl.value : '';

  
    // Filtering logic based on 'category'
    this.products = this.products.filter(product =>
      !category || product.category === category
    );
  
    // Sorting logic based on 'sortBy'
    if (sortBy === 'price') {
      this.products.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'name') {
      this.products.sort((a, b) => a.title.localeCompare(b.title));
    }
  }
  onSelectProduct(product: any) {
    this.selectedProduct = product;
  }
  navigateToProductDetails(productId: number): void {
    // Use the Router service to navigate to the product details route
    this.router.navigate(['/products', productId]);
  }
  

  
}

