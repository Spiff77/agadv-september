import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../../model/Product';
import {ProductHttpService} from '../../product-http.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductHttpService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.findOne(Number(id)).subscribe( p => this.product = p);
  }

  delete(): void {
    this.productService.delete(this.product.id).subscribe( d => {
      this.router.navigateByUrl('/products');
    });
  }
}
