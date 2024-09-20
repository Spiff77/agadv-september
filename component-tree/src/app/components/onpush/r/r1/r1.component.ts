import { ChangeDetectionStrategy, Component } from '@angular/core';
import {R2Component} from '../r2/r2.component';

@Component({
  selector: 'app-r1',
  standalone: true,
  imports: [
    R2Component
  ],
  template: `
    <div>
      <h3>R: OnPush - signal values, fromEvent click binding</h3>
      Nb of rerender:  {{displayCount()}}
      <app-r2></app-r2>
    </div>
  `,
  styleUrl: './r1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class R1Component {
  count = 0;

  displayCount() {
    return ++this.count;
  }
}
