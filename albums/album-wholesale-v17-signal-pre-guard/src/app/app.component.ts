import {ChangeDetectionStrategy, Component, effect, inject, OnInit, signal, Signal} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CartComponent} from './components/dialog/cart/cart.component';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {Album} from './model/album.model';
import {CartStore} from './store/cart.store';
import {MatCardContent, MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {AsyncPipe, JsonPipe, NgClass} from '@angular/common';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatCardContent,
    MatCardModule,
    MatSidenavModule,
    RouterOutlet,
    AsyncPipe,
    JsonPipe,
    RouterLink,
    NgClass
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  dialogService = inject(MatDialog);
  router = inject(Router);
  authService = inject(AuthService);
  readonly cartStore = inject(CartStore);
  currentRoute= signal('')
  totalQuantity = this.cartStore.albumsQuantity


  constructor() {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute.set(event.urlAfterRedirects.split('/').pop() || '');
      }
    })
  }

  calls = 0;

  toggleLogin(){
    (this.authService.isAuthenticated().subscribe(v => {
      v ?
        this.authService.logout():
        this.authService.login()
    }))
  }


  getChecked() {
    return this.calls++;
  }

  openCart() {
    this.dialogService.open(CartComponent);
  }

  addOneInCart(album: Album) {
    this.cartStore.addAlbum(album);
  }

  removeOneInCart(album: Album) {
    this.cartStore.removeAlbum(album);
  }

}
