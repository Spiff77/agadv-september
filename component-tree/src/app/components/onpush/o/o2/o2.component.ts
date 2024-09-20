import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-o2',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  styleUrl: './o2.component.scss',
})
export class O2Component {

  count = 0;
  counts: number[] = []

  displayCount() {
    return ++this.count;
  }

  addCount() {
    this.counts.push(this.count);
  }
}
