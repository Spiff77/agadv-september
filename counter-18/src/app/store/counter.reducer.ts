import {createReducer, on} from '@ngrx/store';
import {decrement, increment, reset, update} from './counter.action';

const initialState:counterType = {counter: {value: 0, name: 'super counter'}}
export type counterType = {counter: {value: number, name: string}}
export type counterStoreType = {counterStore: counterType}

export const counterReducer = createReducer<counterType>(
  initialState,
  on(increment, state => ({
    counter: {
       ...state.counter,
       value: state.counter.value + 1
    }
  })),
  on(decrement, state =>  {
    return {
      counter: {
        ...state.counter,
        value: state.counter.value - 1
      }
    }
  }),
  on(reset, state => ({
    counter: {
      ...state.counter,
      value: 0
    }
  })),
  on(update, (state, {newValue, newName}) =>   ({
    counter: {
      ...state.counter,
      value: newValue ?? state.counter.value,
      name: newName ?? state.counter.name
    }
  }))
)
