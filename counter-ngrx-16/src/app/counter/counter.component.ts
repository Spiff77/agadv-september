import {Component, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {decrement, increment, reset} from '../store/counter.action';
import {counterType} from '../store/counter.reducer';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit{
  value = 0;

  store = inject(Store<counterType>)

  ngOnInit(): void {
    this.store.subscribe(s => {
      this.value = s.counterStore
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
