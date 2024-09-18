import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Product} from '../model/Product';
import {Supplier} from '../model/Supplier';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  @Input() supplier: Supplier;
  @Output() evt = new EventEmitter<Supplier>();

  @HostListener('click')
  productClick(): void {
    this.evt.emit(this.supplier);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
