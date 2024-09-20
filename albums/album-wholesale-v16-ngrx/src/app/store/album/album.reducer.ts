import {Album} from '../../model/album.model';
import {createReducer, on} from '@ngrx/store';
import {loadAlbumsSuccess} from './album.actions';

export type AlbumState = Album[]

export const initialState: AlbumState = []

export const albumReducer = createReducer(
  initialState,
  on(loadAlbumsSuccess, (state, {albums})=> {
    return albums
  })
)
