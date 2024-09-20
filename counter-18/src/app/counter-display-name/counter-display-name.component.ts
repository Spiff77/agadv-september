import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {counterStoreType} from '../store/counter.reducer';
import {selectCounterName} from '../store/counter.selector';
import {Observable} from 'rxjs';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-counter-display-name',
  templateUrl: './counter-display-name.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./counter-display-name.component.scss'],
  imports: [
    AsyncPipe
  ],
  standalone: true
})
export class CounterDisplayNameComponent {
  name$:Observable<string> | undefined

  store = inject(Store<counterStoreType>)

  ngOnInit(): void {
    this.name$ = this.store.select(selectCounterName)
  }

}
