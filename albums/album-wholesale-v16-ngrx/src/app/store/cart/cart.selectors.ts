import { createFeatureSelector, createSelector } from '@ngrx/store';
import {CartState} from './cart.reducer';

export const cartState = createFeatureSelector<CartState>('cartstore');

export const selectAlbums = () => createSelector(
  cartState,
  (cart: CartState) => cart.albums
)
export const selectProductById = (id: number) =>
  createSelector(
    cartState,
    (cart: CartState) => cart.albums.find(album => album.id === id)
  );
export const selectAlbumQuantity =
  createSelector(
    cartState,
    (cart: CartState) => cart.albums.reduce((acc, album) => acc + album.quantity, 0)
  );
