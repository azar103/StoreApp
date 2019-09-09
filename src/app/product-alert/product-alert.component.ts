import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
  @Input() product: any;
  constructor() { }

  ngOnInit() {
  }
  notify(){
    alert('you will be notified when the product goes on sale');
  }

}
