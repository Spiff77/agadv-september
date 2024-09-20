import {Album} from '../model/album.model';
import {patchState, signalStore, withComputed, withMethods, withState} from '@ngrx/signals';
import {computed, signal, WritableSignal} from '@angular/core';


export type AlbumCart = Album & {quantity: number};
export type Cart = {
  albums: AlbumCart[]
};

export const initialState: Cart = {
  albums: [],
}

export const CartStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods( (cartstore) => ({
    addAlbum(album: Album) {
      let albums = cartstore.albums();
      let existingAlbum = albums.find(a => a.id === album.id);
      if (existingAlbum) {
        existingAlbum.quantity++
      } else {
        albums.push({...album, quantity: 1});
      }
      patchState(cartstore, {albums:[...albums]})
    },
    removeAlbum(album: Album) {
      let albums = cartstore.albums();
      let existingAlbum = albums.find(a => a.id === album.id);
      if (existingAlbum) {
        existingAlbum.quantity--
        if (existingAlbum.quantity === 0) {
          albums.splice(albums.indexOf(existingAlbum), 1);
        }
      }
      patchState(cartstore, {albums: [...albums]} )
    },

    }),
  ),
  withComputed(({albums}) => ({
    albumsQuantity: computed(() => {
      return albums().reduce((acc, album) => acc + album.quantity, 0)
    })
  })
  )
)
