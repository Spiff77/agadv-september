import {createAction, props} from '@ngrx/store';

export const increment = createAction('[Counter] Increment')
export const reset = createAction('[Counter] Reset')
export const decrement = createAction('[Counter] Decrement')
export const update = createAction('[Counter] Update Value', props<{newName?: string,newValue?: number}>())

