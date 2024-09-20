import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {decrement, increment, reset} from '../store/counter.action';
import {counterStoreType} from '../store/counter.reducer';
import {selectCounterValue} from '../store/counter.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit{
  value = 0;

  store = inject(Store<counterStoreType>)

  ngOnInit(): void {
    this.store.select(selectCounterValue).subscribe(counterValue => {
      console.log('counter')
      this.value = counterValue
    })
  }

  decrementValue() {
    this.store.dispatch(decrement())
  }

  incrementValue() {
    this.store.dispatch(increment())
  }

  resetValue() {
    this.store.dispatch(reset())
  }
}
