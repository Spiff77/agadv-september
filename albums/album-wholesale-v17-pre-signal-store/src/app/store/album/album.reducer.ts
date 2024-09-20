import {createReducer, on} from '@ngrx/store';
import {Album} from '../../model/album.model';
import {loadingAlbumsSucceeded} from './album.actions';

export const initialState: Album[] = []

export const albumReducer = createReducer(
    initialState,
    on(loadingAlbumsSucceeded, (state, {albums}) => {
      return albums;
    })
);
