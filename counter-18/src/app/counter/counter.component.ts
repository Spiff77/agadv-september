import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {decrement, increment, reset} from '../store/counter.action';
import {counterStoreType} from '../store/counter.reducer';
import {selectCounterValue} from '../store/counter.selector';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./counter.component.scss'],
  imports: [
    AsyncPipe
  ],
  standalone: true
})
export class CounterComponent implements OnInit{
  $value:Observable<number> | undefined

  store = inject(Store<counterStoreType>)

  ngOnInit(): void {
    this.$value = this.store.select(selectCounterValue)
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
