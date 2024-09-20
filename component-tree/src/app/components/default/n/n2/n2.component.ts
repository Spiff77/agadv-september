import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-n2',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [],
  template: `
    <p>
      Nb of rerender:  {{displayCount()}} <br>
      @for (i of counts; track i) {
        {{i}}
      }
      <button (click)="addCount()">Click me</button>
    </p>
  `,
  styleUrl: './n2.component.scss',
})
export class N2Component {

  count = 0;
  counts: number[] = []

  displayCount() {
    return ++this.count;
  }

  addCount() {
    this.counts.push(this.count);
  }
}
