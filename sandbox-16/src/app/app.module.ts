import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToUpperCasePipe } from './to-upper-case.pipe';
import {A1Component} from './a1/a1.component';
import {A2Component} from './a2/a2.component';
import {A3Component} from './a3/a3.component';
import {RouterModule, Routes} from '@angular/router';
import {B1Component} from './b1/b1.component';
import {B2Component} from './b2/b2.component';
import {B3Component} from './b3/b3.component';
import {MenuComponent} from './menu/menu.component';

const routes: Routes = [
  {path: 'a/a1', component: A1Component},
  {path: 'a/a2', component: A2Component},
  {path: 'a/a3', component: A3Component},
  {path: 'b/b1', component: B1Component},
  {path: 'b/b2', component: B2Component},
  {path: 'b/b3', component: B3Component}
];

@NgModule({
  declarations: [
    AppComponent,
    ToUpperCasePipe,
    A1Component,
    A2Component,
    A3Component,
    B1Component,
    B2Component,
    B3Component,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
