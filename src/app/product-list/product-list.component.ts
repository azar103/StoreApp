import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[];
  productsSubscription: Subscription;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productsSubscription = this.productService.productsSubject.subscribe(
      (data: any[]) => {
        this.products = data;
      }
    );
    this.productService.emitProductsSubject();
  }
}
