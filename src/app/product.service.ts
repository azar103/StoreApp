import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsSubject = new Subject<any[]>();
  private products = [
    {
      id:  1,
      name: 'PhoneXL',
      price: 799,
      content: 'A large phone with one the best scrrens'
    },
    {
      id: 2,
      name: 'PhoneMini',
      price: 699,
      content: 'A great phone with one of the best cameras'
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299

    }
  ];

  constructor() { }
  emitProductsSubject() {
   this.productsSubject.next(this.products.slice());
  }

  getProductById(id: number) {
    const product = this.products.find((p) => {
      return p.id === id;
    });
    return product;
  }
}
