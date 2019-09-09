import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() productId: number;
  @Input() index: number;
  product: any;
  constructor() { }

  ngOnInit() {
  }
  share() {
    alert('the product hase been shared !');
  }

}
