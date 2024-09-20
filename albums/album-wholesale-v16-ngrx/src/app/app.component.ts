import {Component, inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CartComponent} from './components/dialog/cart/cart.component';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Album} from './model/album.model';
import {AddComponent} from './components/dialog/album/add/add.component';
import {Store} from '@ngrx/store';
import {addAlbum, removeAlbum} from './store/cart/cart.actions';
import {AlbumCart, CartState} from './store/cart/cart.reducer';
import {selectAlbumQuantity, selectAlbums} from './store/cart/cart.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cartStore = inject(Store);

  totalAlbums$ = this.cartStore.select(selectAlbumQuantity);
  dialogService = inject(MatDialog);
  router = inject(Router);
  currentRoute: string = ''
  cart:AlbumCart[] = [];
  cart$!:Observable<AlbumCart[]>;


  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects.split('/').pop() || '';
      }
    })
    this.cart$ = this.cartStore.select(selectAlbums())
    this.cartStore.select('cartstore').subscribe(cartstore => {
      this.cart = cartstore.albums;
    })
  }

  openCart() {
    this.dialogService.open(CartComponent);
  }

  addOneInCart(album: Album) {

    //this.cartService.add(album);
    this.cartStore.dispatch(addAlbum({album}));
  }

  removeOneInCart(album: Album) {
    //this.cartService.remove(album);
    this.cartStore.dispatch(removeAlbum({album}));
  }

}
