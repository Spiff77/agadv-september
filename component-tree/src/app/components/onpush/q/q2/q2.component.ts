import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  signal, viewChild,
  ViewChild,
  WritableSignal
} from '@angular/core';
import {fromEvent} from 'rxjs';

@Component({
  selector: 'app-q2',
  standalone: true,
  imports: [],
  template: `
    <p>
      Nb of rerender: {{displayCount()}} <br>
      history:
      @for (i of counts; track i) {
        {{i}}
      }
      <button #btn>Click me</button>
    </p>
  `,
  styleUrl: './q2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Q2Component implements AfterViewChecked {
  btn = viewChild.required('btn', { read: ElementRef });
  count = 0;
  counts: number[] = []
  cd = inject(ChangeDetectorRef)

  displayCount() {
    return ++this.count;
  }

  addCount() {
      this.counts.push(this.count);
  }

  ngAfterViewChecked(): void {
    fromEvent(this.btn().nativeElement, 'click').subscribe(() => {
      this.addCount();
      this.cd.detectChanges()
    })
  }
}
