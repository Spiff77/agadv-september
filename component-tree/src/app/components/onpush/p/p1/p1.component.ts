import { ChangeDetectionStrategy, Component } from '@angular/core';
import {O2Component} from '../../o/o2/o2.component';
import {P2Component} from '../p2/p2.component';

@Component({
  selector: 'app-p1',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    O2Component,
    P2Component
  ],
  template: `
    <div>
      <h3>P: OnPush, standard values, fromEvent click binding</h3>
      Nb of rerender: {{displayCount()}}
      <app-p2></app-p2>
    </div>
  `,
  styleUrl: './p1.component.scss',
})
export class P1Component {

  count = 0;

  displayCount() {
    return ++this.count;
  }
}
