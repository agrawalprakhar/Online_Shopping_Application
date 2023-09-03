import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>("https://dummyjson.com/products")
  }

  getProductById(id: string){
    const url = `https://dummyjson.com/products/${id}`; // Properly append 'id' to the URL
    return this.http.get(url);
  }
  
}
