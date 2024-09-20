import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Store} from '@ngrx/store';
import {update} from '../store/counter.action';
import {counterType} from '../store/counter.reducer';

@Component({
  selector: 'app-counter-form',
  templateUrl: './counter-form.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./counter-form.component.scss']
})
export class CounterFormComponent {
  newValue: any;
  newName: any;

  store = inject(Store<counterType>)

  changeValue() {
    this.store.dispatch(update({newValue: +this.newValue}))
  }
  changeName() {
    this.store.dispatch(update({newName: this.newName}))
  }
}
