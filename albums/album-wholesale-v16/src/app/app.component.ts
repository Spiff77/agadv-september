import {Component, inject, OnInit} from '@angular/core';
import {AlbumCart, CartService} from './services/cart.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CartComponent} from './components/dialog/cart/cart.component';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Album} from './model/album.model';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cartService = inject(CartService);
  dialogService = inject(MatDialog);
  router = inject(Router);
  http = inject(HttpClient);

  currentRoute: string = ''
  cart:AlbumCart[] = this.cartService.cartAlbums;


  ngOnInit() {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects.split('/').pop() || '';
      }
    })
  }

  openCart() {
    this.dialogService.open(CartComponent);
  }

  addOneInCart(album: Album) {
    this.cartService.add(album);
  }

  removeOneInCart(album: Album) {
    this.cartService.remove(album);
  }

}
