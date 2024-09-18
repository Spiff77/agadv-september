import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SupplierHttpService} from '../../supplier-http.service';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.css']
})
export class SupplierAddComponent implements OnInit {

  form: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private supplierService: SupplierHttpService,
              private route: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      companyName: ['', Validators.required],
      bankAccountNumber: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  add(): void {
    this.formSubmitted = true;
    if (this.form.valid) {
      this.supplierService.add(this.form.value).subscribe(v => this.route.navigateByUrl('/products'));
    }
  }
}
