import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {NameService} from './name.service';

const routes: Routes = [
  {path:'a', loadChildren: () => import('./a/a.module').then(m => m.AModule)},
  {path:'b', loadChildren: () => import('./b/b.module').then(m => m.BModule)}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [NameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
