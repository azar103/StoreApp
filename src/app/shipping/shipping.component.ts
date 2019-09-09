import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit, OnDestroy {
  public shippingCosts: any;
  ItemsSubscription: Subscription;
  constructor(private cartService: CartService) { }

  ngOnInit() {
      this.ItemsSubscription =  this.cartService.getShippingPrices().subscribe(
        data => {
          this.shippingCosts = data;
        },
        (error) => {
          console.log('Uh-oh, an error occurred! : ' + error);
        },
        () => {
          console.log('Observable complete !');
        }
      );
  }

  ngOnDestroy() {
    this.ItemsSubscription.unsubscribe();
  }




}
