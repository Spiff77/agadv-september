import {createReducer, on} from '@ngrx/store';
import {addAlbum, removeAlbum} from './cart.actions';
import {Album} from '../../model/album.model';

export type AlbumCart = Album & {quantity: number};
export type CartState = {
  albums: AlbumCart[]
};

export const initialState: CartState = {
  albums: [{
    id: 2,
    name: 'Abbey Road',
    artist: 'The Beatles',
    description: 'Abbey Road is the eleventh studio album by English rock band the Beatles, released on 26 September 1969',
    price: 22.9,
    tags: [
      'rock',
      'pop',
      'classic'
    ],
    quantity: 6
  }],
}

export const cartReducer = createReducer(
  initialState,
  on(addAlbum, (state, {album}) => {
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
