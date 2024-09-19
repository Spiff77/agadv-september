import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {NameService} from './name.service';
import { ServiceWorkerModule } from '@angular/service-worker';

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
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [NameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
