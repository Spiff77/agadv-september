import { Routes } from '@angular/router';
import {AlbumListComponent} from './components/albums/album-list/album-list.component';
import {HomeComponent} from './components/home/home.component';
import {AlbumAddComponent} from './components/albums/album-add/album-add.component';

export const routes: Routes  = [
  {path: 'shop', component: AlbumListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'add', component: AlbumAddComponent},
  {path: '',  redirectTo: '/home', pathMatch: 'full'},
];
