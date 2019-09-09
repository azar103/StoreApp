import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any[];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.getItems();
  }
  onSubmit(form: NgForm) {
        alert('the product is bought');
        this.products =  this.cartService.clearCart();
  }
}
