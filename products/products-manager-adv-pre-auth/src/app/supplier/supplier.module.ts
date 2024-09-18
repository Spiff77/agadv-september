import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SupplierListComponent} from './supplier-list/supplier-list.component';
import {SupplierAddComponent} from './supplier-add/supplier-add.component';
import {SupplierDetailComponent} from './supplier-detail/supplier-detail.component';
import {SupplierComponent} from './supplier.component';
import {SharedModule} from '../shared.module';
import {AnonymizeBankAccountPipe} from '../anonymize-bank-account.pipe';


const routes: Routes = [
  { path: '', component: SupplierListComponent },
  { path: 'add', component: SupplierAddComponent },
  { path: ':id', component: SupplierDetailComponent },
];


@NgModule({
  declarations: [
    SupplierComponent,
    SupplierListComponent,
    SupplierAddComponent,
    SupplierDetailComponent,
    AnonymizeBankAccountPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class SupplierModule { }
