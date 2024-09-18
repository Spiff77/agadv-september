import { Component, OnInit, HostListener } from '@angular/core';
import {Product} from '../../model/Product';
import {ProductService} from '../../product.service';
import {ProductHttpService} from '../../product-http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  selectedProduct: Product;
  filterStr: string;

  constructor(private productService: ProductHttpService) { }

  ngOnInit(): void {
    this.productService.findAll().subscribe( r => this.products = r);
  }

  receiveChildrenEvt(product: Product): void {
    this.selectedProduct = product;
  }

  close(): void {
    this.selectedProduct = undefined;
  }

  filterList(): Product[] {
    return this.filterStr
      ? this.products.filter( s => s.name.toLowerCase().search(this.filterStr.toLowerCase()) !== -1)
      : this.products;
  }

  setFilter(event: Event): void {
    this.filterStr = (event.target as HTMLInputElement).value;
  }
}
