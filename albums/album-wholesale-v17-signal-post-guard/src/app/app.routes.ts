import {AuthGuard} from './guards/auth.guard';
import {loadAlbumsResolver} from './resolvers/load-albums.resolver';
import {Routes} from '@angular/router';

export const APP_ROUTES: Routes  = [
  {path: 'shop', resolve: {albums: loadAlbumsResolver},  loadComponent: () => import('./components/albums/album-list/album-list.component').then(c => c.AlbumListComponent)},
  {path: 'home', loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent)},
  {path: 'add',
    loadComponent: () => import('./components/albums/album-add/album-add.component').then(c => c.AlbumAddComponent),
    canActivate: [AuthGuard]
  },
  {path: '',  redirectTo: '/home', pathMatch: 'full'},
];
