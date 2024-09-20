import { ChangeDetectionStrategy, Component } from '@angular/core';
import {O2Component} from '../o2/o2.component';

@Component({
  selector: 'app-o1',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    O2Component
  ],
  template: `
    <div>
      <h3>O - OnPush, standard values, (click)="f()" binding</h3>
      Nb of rerender: {{displayCount()}}
      <app-o2></app-o2>
    </div>
  `,
  styleUrl: './o1.component.scss',
})
export class O1Component {

  count = 0;

  displayCount() {
    return ++this.count;
  }

}
