import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() products: any; // Declare an input property to receive product data from the parent
  product: any;
  productdata:any|Product;
  productId!: number;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    let  id = this.route.snapshot.paramMap.get('productId');
    console.log("product id is",id)
    if (id !== null) {
      // this.productId = +id;
      // this.product = this.productService.getProductById(this.productId.toString()); // Convert productId to striFetch product details
      id && this.productService.getProductById(id).subscribe((res)=>{
        this.productdata=res;
        console.log(res);
      })
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
