import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CounterComponent} from './counter/counter.component';
import {CounterFormComponent} from './counter-form/counter-form.component';
import {CounterDisplayNameComponent} from './counter-display-name/counter-display-name.component';

type Person = { name: string, age: number}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports:[CounterComponent, CounterFormComponent, CounterDisplayNameComponent],
  changeDetection:ChangeDetectionStrategy.OnPush,

})
export class AppComponent {
  title = 'counter-ngrx-16';

  constructor() {}

}
