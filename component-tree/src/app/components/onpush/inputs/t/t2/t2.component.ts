import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {Person} from '../../../../../app.component';

@Component({
  selector: 'app-t2',
  standalone: true,
  imports: [
    JsonPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>
      {{person | json}}
    </p>
  `,
  styleUrl: './t2.component.scss',
})
export class T2Component implements OnChanges{
  @Input() person!: Person;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes are detected')
  }
}

