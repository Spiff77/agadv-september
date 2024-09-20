import {createFeatureSelector, createSelector} from '@ngrx/store';
import {counterType} from './counter.reducer';

export const counterFeatureState = createFeatureSelector<counterType>('counterStore')

export const selectCounterName = createSelector(
  counterFeatureState,
  (state: counterType) => state.counter.name
)

export const selectCounterValue = createSelector(
  counterFeatureState,
  (state: counterType) => state.counter.value
)

