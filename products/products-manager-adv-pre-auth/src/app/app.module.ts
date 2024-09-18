import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SelectedBoxDirective } from './selected-box.directive';
import {SupplierService} from './supplier.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  { path:'suppliers', loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierModule)},
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
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SupplierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
