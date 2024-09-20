import {createReducer, on} from '@ngrx/store';
import {addAlbum, removeAlbum} from './cart.actions';
import {Album} from '../../model/album.model';

export type AlbumCart = Album & {quantity: number};
export type Cart = {
  albums: AlbumCart[]
};

export const initialState: Cart = {
  albums: [  ],
}

export const cartReducer = createReducer(
  initialState,
  on(addAlbum, (state, {album}) => {
    console.log('addAlbum', album);

    let albums = [...state.albums];
    let existingAlbumIndex = albums.findIndex(a => a.id === album.id);
    if (existingAlbumIndex !== -1) {
      let existingAlbum = {...albums[existingAlbumIndex]}
      existingAlbum.quantity++;
      albums[existingAlbumIndex] = existingAlbum;
    } else {
      albums.push({...album, quantity: 1});
    }
    return {...state, albums};
  }),
  on(removeAlbum, (state, {album}) => {
    let albums = [...state.albums];
    let existingAlbumIndex = albums.findIndex(a => a.id === album.id);
    if (existingAlbumIndex !== -1) {
      let existingAlbum = {...albums[existingAlbumIndex]}
      existingAlbum.quantity--;
      albums[existingAlbumIndex] = existingAlbum;
      if (existingAlbum.quantity === 0) {
        albums.splice(albums.indexOf(existingAlbum), 1);
      }
    }
    return {...state, albums}
  }
));
