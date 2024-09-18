import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Product} from '../model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() evt = new EventEmitter<Product>();

  @HostListener('click')
  productClick(): void {
    this.evt.emit(this.product);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
