import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import {SupplierListComponent} from './supplier/supplier-list/supplier-list.component';
import { SupplierComponent } from './supplier/supplier.component';
import {AnonymizeBankAccountPipe} from './anonymize-bank-account.pipe';
import { SelectedBoxDirective } from './selected-box.directive';
import {SupplierService} from './supplier.service';
import {HttpClientModule} from '@angular/common/http';
import { SupplierAddComponent } from './supplier/supplier-add/supplier-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductAddComponent } from './product/product-add/product-add.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SupplierDetailComponent } from './supplier/supplier-detail/supplier-detail.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import {ProductModule} from './product/product.module';
import {SupplierModule} from './supplier/supplier.module';
import {SharedModule} from './shared.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SelectedBoxDirective,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    ProductModule,
    SharedModule,
    SupplierModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SupplierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
