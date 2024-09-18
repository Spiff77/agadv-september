import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {NameService} from './name.service';
import {AModule} from './a/a.module';
import {BModule} from './b/b.module';

const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AModule,
    BModule,
    RouterModule.forRoot(routes)
  ],
  providers: [NameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
