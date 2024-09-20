import {ChangeDetectionStrategy, Component, effect, input, Input, output, SimpleChanges} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {Person} from '../../../../../app.component';

@Component({
  selector: 'app-u2',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
    <p>
      {{person() | json}}
    </p>
  `,
  styleUrl: './u2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class U2Component {

   person = input.required<Person>();

  constructor() {
    effect(() => {
      console.log(this.person())
    });
  }
}
