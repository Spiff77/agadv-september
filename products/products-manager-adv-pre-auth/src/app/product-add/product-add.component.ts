import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SupplierHttpService} from '../supplier-http.service';
import {ProductHttpService} from '../product-http.service';
import {Supplier} from '../model/Supplier';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  form: FormGroup;
  formSubmitted = false;

  suppliers: Observable<Supplier[]>;

  constructor(private fb: FormBuilder,
              private productService: ProductHttpService,
              private supplierService: SupplierHttpService,
              private route: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      active: ['true', ],
      name: ['', Validators.required],
      description: [''],
      category: ['', Validators.required ],
      price: ['', Validators.required],
      promo: [''],
      supplier: this.fb.group(
        {id: 1}
      )
    });
    this.suppliers = this.supplierService.findAll();
  }

  add(): void {
    this.formSubmitted = true;
    if (this.form.valid) {
      this.productService.add(this.form.value).subscribe(v => this.route.navigateByUrl('/products'));
    }
  }
}
