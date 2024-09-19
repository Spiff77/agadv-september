import {createReducer, on} from '@ngrx/store';
import {decrement, increment, reset, update} from './counter.action';

const initialState = 876123
export type counterType = {counterStore: number}


export const counterReducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, state => 0),
  on(update, (state, {newValue}) => newValue)
)
