import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://jsonplaceholder.typicode.com'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<any[]>(`${this.apiUrl}/posts`).pipe(
      map(data => {
        // Map the JSONPlaceholder data to your Product model
        return data.map(item => ({
          id: item.id,
          name: item.title,
          price: item.id * 10, // Just an example price calculation
          image: `https://picsum.photos/200?random=${item.id}`, // Using Lorem Picsum for images
          description: item.body
        }));
      })
    );
  }

  getProductById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }
}
