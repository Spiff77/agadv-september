import {createAction} from '@ngrx/store';

export const increment = createAction('[Counter] Increment')
export const reset = createAction('[Counter] Reset')
export const decrement = createAction('[Counter] Decrement')

