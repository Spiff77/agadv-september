import {
  AfterViewChecked,
  AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef, inject, signal, viewChild,
  ViewChild, WritableSignal
} from '@angular/core';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-p2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
  template: `

    <p>
      Nb of rerender:  {{displayCount()}} <br>
      history:
      @for (i of counts(); track i) {
        {{i}}
      }
      <button #btn>Click me</button>
    </p>
  `,
  styleUrl: './p2.component.scss',
})
export class P2Component implements AfterViewChecked {

  btn = viewChild.required('btn', { read: ElementRef });
  count = 0;
  counts = signal<number[]>([])

  displayCount() {
    return ++this.count;
  }

  addCount() {
      this.counts().push(this.count);
  }

  ngAfterViewChecked(): void {
    console.log('P2Component.ngAfterViewInit');
    fromEvent(this.btn().nativeElement, 'click').subscribe(() => {
      console.log('P2Component.fromEvent');
      this.addCount();
    })
  }
}
