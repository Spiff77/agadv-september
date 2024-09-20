import {ChangeDetectionStrategy, Component, inject, OnInit, signal, Signal} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CartComponent} from './components/dialog/cart/cart.component';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {Album} from './model/album.model';
import {Store} from '@ngrx/store';
import {addAlbum, removeAlbum} from './store/cart/cart.actions';
import {Cart} from './store/cart/cart.reducer';
import {selectAlbumQuantity} from './store/cart/cart.selectors';
import {MatCardContent, MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {AsyncPipe} from '@angular/common';
import {toSignal} from '@angular/core/rxjs-interop';

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
    RouterLink
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  cartStore = inject(Store<{ cartstore: Cart }>);
  dialogService = inject(MatDialog);
  router = inject(Router);

  totalAlbums = toSignal(this.cartStore.select(selectAlbumQuantity));
  cartstore: Signal<any> = toSignal<Cart>(this.cartStore.select('cartstore'))
  currentRoute= signal('')

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute.set(event.urlAfterRedirects.split('/').pop() || '');
      }
    })
  }

  calls = 0;

  getChecked() {
    return this.calls++;
  }

  openCart() {
    this.dialogService.open(CartComponent);
  }

  addOneInCart(album: Album) {
   this.cartStore.dispatch(addAlbum({album}));
  }

  removeOneInCart(album: Album) {
    this.cartStore.dispatch(removeAlbum({album}));
  }

}
