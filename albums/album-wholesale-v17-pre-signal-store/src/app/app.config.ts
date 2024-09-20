import {ApplicationConfig, isDevMode} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {cartState} from './store/cart/cart.selectors';
import {cartReducer} from './store/cart/cart.reducer';
import {albumReducer} from './store/album/album.reducer';
import {AlbumEffects} from './store/album/album.effects';
import {provideHttpClient} from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideAnimationsAsync(),
    provideStore({
        cartstore: cartReducer,
        albumstore: albumReducer
    }),
    provideEffects([
        AlbumEffects
    ]),
    provideHttpClient(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
