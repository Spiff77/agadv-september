import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import {SupplierListComponent} from './supplier-list/supplier-list.component';
import { SupplierComponent } from './supplier/supplier.component';
import {AnonymizeBankAccountPipe} from './anonymize-bank-account.pipe';
import { SelectedBoxDirective } from './selected-box.directive';
import {SupplierService} from './supplier.service';
import {HttpClientModule} from '@angular/common/http';
import { SupplierAddComponent } from './supplier-add/supplier-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductAddComponent } from './product-add/product-add.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SupplierDetailComponent } from './supplier-detail/supplier-detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ProductListComponent },
  { path: 'products/add', component: ProductAddComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'suppliers', component: SupplierListComponent },
  { path: 'suppliers/add', component: SupplierAddComponent },
  { path: 'suppliers/:id', component: SupplierDetailComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductListComponent,
    ProductComponent,
    SupplierListComponent,
    SupplierComponent,
    AnonymizeBankAccountPipe,
    SelectedBoxDirective,
    SupplierAddComponent,
    ProductAddComponent,
    HomeComponent,
    PageNotFoundComponent,
    SupplierDetailComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SupplierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
