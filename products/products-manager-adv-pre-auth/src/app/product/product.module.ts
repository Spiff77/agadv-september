import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductComponent} from './product.component';
import {ProductAddComponent} from './product-add/product-add.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/add', component: ProductAddComponent },
  { path: 'products/:id', component: ProductDetailComponent },
];


@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductAddComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ProductModule { }
