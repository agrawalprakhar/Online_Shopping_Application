import { Product } from './product.model'; // Import the Product type if needed

export interface Order {
  id: number;
  items: Product[];
  shippingDetails: ShippingDetails;
  total: number;
  // ... other properties ...
}

export interface ShippingDetails {
  name: string;
  address: string;
  city: string;
  postalCode: string;
  // ... other properties ...
}
