import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {counterStoreType} from '../store/counter.reducer';
import {selectCounterName} from '../store/counter.selector';

@Component({
  selector: 'app-counter-display-name',
  templateUrl: './counter-display-name.component.html',
  styleUrls: ['./counter-display-name.component.scss']
})
export class CounterDisplayNameComponent {
  name = ''

  store = inject(Store<counterStoreType>)

  ngOnInit(): void {
    this.store.select(selectCounterName).subscribe(counterName => {
      console.log('counter-display-name')
      this.name = counterName
    })
  }
}
