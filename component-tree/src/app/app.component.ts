import {afterNextRender, afterRender, ChangeDetectionStrategy, Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {O1Component} from './components/onpush/o/o1/o1.component';
import {P1Component} from './components/onpush/p/p1/p1.component';
import {Q1Component} from './components/onpush/q/q1/q1.component';
import {R1Component} from './components/onpush/r/r1/r1.component';
import {T1Component} from './components/onpush/inputs/t/t1/t1.component';
import {U1Component} from './components/onpush/inputs/u/u1/u1.component';
import {V1Component} from './components/onpush/inputs/v/v1/v1.component';
import {N1Component} from './components/default/n/n1/n1.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, O1Component, P1Component, Q1Component, R1Component, T1Component, U1Component, V1Component, N1Component],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Understanding OnPush Signal Change Detection</h1>
    App component, onPush, Nb of rerender:{{displayCount()}}
    <div>
        <app-n1></app-n1>
        <app-n1></app-n1>

        <app-o1></app-o1>
        <app-o1></app-o1>
        <app-p1></app-p1>
        <app-q1></app-q1>
        <app-r1></app-r1>
        <app-t1></app-t1>
        <app-u1></app-u1>
        <app-v1></app-v1>
    </div>
  `,  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'component-tree';
  count = 0;

  displayCount() {
    return ++this.count;
  }

  constructor() {

  }
}


export type Person = {
  name: string,
  age: number
}
