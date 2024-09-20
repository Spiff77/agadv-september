import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {N2Component} from '../n2/n2.component';

@Component({
  selector: 'app-n1',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [
    N2Component
  ],
  template: `
    <div>
      <h3>N - Default, standard values, (click)="f()" binding</h3>
      Nb of rerender: {{displayCount()}}
      <app-n2></app-n2>
    </div>
  `,
  styleUrl: './n1.component.scss',
})
export class N1Component{

  count = 0;

  displayCount() {
    return ++this.count;
  }

}
