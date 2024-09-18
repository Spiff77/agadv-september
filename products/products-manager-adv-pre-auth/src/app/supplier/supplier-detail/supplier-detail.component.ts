import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/Product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductHttpService} from '../../product-http.service';
import {Supplier} from '../../model/Supplier';
import {SupplierHttpService} from '../../supplier-http.service';

@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.scss']
})
export class SupplierDetailComponent implements OnInit {

  supplier: Supplier;

  constructor(private route: ActivatedRoute, private router: Router, private supplierService: SupplierHttpService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.supplierService.findOne(Number(id)).subscribe( s => this.supplier = s);
  }

  delete(): void {
    this.supplierService.delete(this.supplier.id).subscribe( d => {
      this.router.navigateByUrl('/suppliers');
    });
  }
}
