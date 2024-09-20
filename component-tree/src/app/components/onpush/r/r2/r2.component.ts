import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  signal,
  viewChild,
  ViewChild,
  WritableSignal
} from '@angular/core';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-r2',
  standalone: true,
  imports: [],
  template: `
    <p>
      Nb of rerender: {{displayCount()}} <br>
      history:
      @for (i of counts(); track i) {
        {{i}}
      }
      <button #btn>Click me</button>
    </p>
  `,
  styleUrl: './r2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class R2Component {

  btn = viewChild.required('btn', {read: ElementRef<HTMLButtonElement>});
  count = 0;
  counts: WritableSignal<number[]> = signal([])

  displayCount() {
    return ++this.count;
  }

  addCount() {
      this.counts.update(c => [...c, this.count])
  }

  ngAfterViewInit(): void {
    fromEvent(this.btn().nativeElement, 'click').subscribe(() => {
      this.addCount();
    })
  }
}
