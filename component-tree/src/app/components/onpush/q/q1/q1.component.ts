import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Q2Component} from '../q2/q2.component';

@Component({
  selector: 'app-q1',
  standalone: true,
  imports: [
    Q2Component
  ],
  template: `
    <div>
      <h3>Q: OnPush - standard values, fromEvent  click binding - using manual change detection</h3>
      Nb of rerender: {{displayCount()}}
      <app-q2></app-q2>
    </div>
  `,
  styleUrl: './q1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Q1Component {
  count = 0;

  displayCount() {
    return ++this.count;
  }
}
