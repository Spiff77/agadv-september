import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {B1Component} from './b1/b1.component';
import {B2Component} from './b2/b2.component';
import {B3Component} from './b3/b3.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared.module';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: 'b/b1', component: B1Component},
  {path: 'b/b2', component: B2Component},
  {path: 'b/b3', component: B3Component}
];

@NgModule({
  declarations: [
    B1Component,
    B2Component,
    B3Component,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class BModule { }
