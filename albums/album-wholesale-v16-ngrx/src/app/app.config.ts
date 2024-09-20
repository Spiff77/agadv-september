import {importProvidersFrom, isDevMode} from '@angular/core';
import {provideStore, StoreModule} from '@ngrx/store';
import {cartReducer} from './store/cart/cart.reducer';
import {albumReducer} from './store/album/album.reducer';
import {EffectsModule} from '@ngrx/effects';
import {AlbumEffect} from './store/album/album.effect';
import {provideStoreDevtools, StoreDevtoolsModule} from '@ngrx/store-devtools';
import {MatChipsModule} from '@angular/material/chips';
import {NgOptimizedImage} from '@angular/common';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter, Routes} from '@angular/router';
import {AlbumListComponent} from './components/albums/album-list/album-list.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {path: 'shop', component: AlbumListComponent},
  {path: 'home', component: HomeComponent},
  {path: '',  redirectTo: '/home', pathMatch: 'full'},
];

export const appconfig = {
  providers: [
    provideStore({
      cartstore: cartReducer, albumstore: albumReducer
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes)
  ]
}
