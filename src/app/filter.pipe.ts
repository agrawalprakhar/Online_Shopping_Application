import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './models/product.model'; // Import your Product model

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(products: Product[], searchTerm: string): Product[] {
    if (!searchTerm) {
      return products;
    }

    searchTerm = searchTerm.toLowerCase();

    return products.filter(product => {
      return product.title.toLowerCase().includes(searchTerm);
    });
  }
}

