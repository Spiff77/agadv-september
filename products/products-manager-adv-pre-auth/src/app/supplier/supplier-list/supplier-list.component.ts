import { Component, OnInit, HostListener } from '@angular/core';
import {Product} from '../../model/Product';
import {Supplier} from '../../model/Supplier';
import {SupplierService} from '../../supplier.service';
import {SupplierHttpService} from '../../supplier-http.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {

  suppliers: Supplier[] = [];

  selectedSupplier: Supplier;

  constructor(private supplierService: SupplierHttpService) { }

  ngOnInit(): void {
    this.supplierService.findAll().subscribe( r => this.suppliers = r);

  }

  receiveChildrenEvt(supplier: Supplier): void {
    this.selectedSupplier = supplier;
  }

  close(): void {
    this.selectedSupplier = undefined;
  }
}
