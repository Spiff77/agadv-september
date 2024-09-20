import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AlbumListComponent} from './components/albums/album-list/album-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldControlHarness} from '@angular/material/form-field/testing';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCard, MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import { CartComponent } from './components/dialog/cart/cart.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {HomeComponent } from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {AddComponent} from './components/dialog/album/add/add.component';
import {DetailComponent} from './components/dialog/album/detail/detail.component';
import { CommentsComponent } from './components/albums/comments/comments.component';
import { StoreModule } from '@ngrx/store';
import {cartReducer} from './store/cart/cart.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {albumReducer} from './store/album/album.reducer';
import {AlbumEffect} from './store/album/album.effect';
import {MatChipsModule} from '@angular/material/chips';
import {NgOptimizedImage} from '@angular/common';

const routes: Routes = [
  {path: 'shop', component: AlbumListComponent},
  {path: 'home', component: HomeComponent},
  {path: '',  redirectTo: '/home', pathMatch: 'full'},
];
@NgModule({ declarations: [
        AppComponent,
        AlbumListComponent,
        CartComponent,
        HomeComponent,
        AddComponent,
        DetailComponent,
        CommentsComponent
    ],
    exports: [
        CommentsComponent
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        MatProgressBarModule,
        MatTableModule,
        MatToolbarModule,
        MatDialogModule,
        MatBadgeModule,
        MatSidenavModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCardModule,
        MatIconModule,
        RouterModule.forRoot(routes),
        StoreModule.forRoot({ cartstore: cartReducer, albumstore: albumReducer }, {}),
        EffectsModule.forRoot([AlbumEffect]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
        MatChipsModule,
        NgOptimizedImage], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
