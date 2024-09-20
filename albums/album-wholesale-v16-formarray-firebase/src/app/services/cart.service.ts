import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Album} from '../model/album.model';

export type AlbumCart = Album & {quantity: number};
export type Cart = {
  albums: AlbumCart[]
};
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = {albums: []};

  add(album: Album) {
    const existingAlbum = this.cart.albums.find(a => a.id === album.id);
    if (existingAlbum) {
      existingAlbum.quantity++;
    } else {
      this.cart.albums.push({...album, quantity: 1});
    }
  }

  remove(album: Album) {
    const existingAlbum = this.cart.albums.find(a => a.id === album.id);
    if (existingAlbum) {
      existingAlbum.quantity--;
      if (existingAlbum.quantity === 0) {
         this.cart.albums.splice(this.cart.albums.indexOf(existingAlbum), 1);
      }
    }
  }

  get totalItems(): number {
    return this.cart.albums.reduce((acc, album) => acc + album.quantity, 0);
  }


  get cartAlbums(): AlbumCart[] {
    return this.cart.albums;
  }

  getQuantityInCart(album: Album): number {
    const existingAlbum = this.cart.albums.find(a => a.id === album.id);
    return existingAlbum ? existingAlbum.quantity : 0;
  }
}
