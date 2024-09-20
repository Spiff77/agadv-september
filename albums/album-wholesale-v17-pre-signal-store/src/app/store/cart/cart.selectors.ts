import { createFeatureSelector, createSelector } from '@ngrx/store';
import {Cart} from './cart.reducer';

// Get complete state of the cart in application
export const cartState = createFeatureSelector<Cart>('cartstore');

export const selectProductById = (id: number) =>
  createSelector(
    cartState,
    (cart: Cart) => cart.albums.find(album => album.id === id)
  );
export const selectAlbumQuantity =
  createSelector(
    cartState,
    (cart: Cart) => cart.albums.reduce((acc, album) => acc + album.quantity, 0)
  );
