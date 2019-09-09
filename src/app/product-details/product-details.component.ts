import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  name: string;
  price: number;
  description: string;
  product: any;

  constructor(private route: ActivatedRoute,  private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['productId'];
    this.product = this.productService.getProductById(+id);
    this.name = this.productService.getProductById(+id).name;
    this.price = this.productService.getProductById(+id).price;
    this.description = this.productService.getProductById(+id).content;
  }

  addToCart() {
    window.alert('Your product has been added to to the cart !');
    this.cartService.addToCart(this.product);
  }




}
