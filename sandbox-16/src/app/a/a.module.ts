import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {A1Component} from './a1/a1.component';
import {A2Component} from './a2/a2.component';
import {A3Component} from './a3/a3.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: 'a/a1', component: A1Component},
  {path: 'a/a2', component: A2Component},
  {path: 'a/a3', component: A3Component},
];

@NgModule({
  declarations: [
    A1Component,
    A2Component,
    A3Component,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class AModule { }
