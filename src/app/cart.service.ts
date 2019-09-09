import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IItem } from './item';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  public items = [];
  private url = '/assets/shipping.json';
  constructor(private http: HttpClient) { }
  addToCart(product: any) {
    this.items.push(product);
  }
 getItems() {
   return this.items;
 }
 clearCart() {
   this.items = [];
   return this.items;
 }
 getShippingPrices(): Observable<IItem[]> {
   return this.http.get<IItem[]>(this.url);
 }
}
