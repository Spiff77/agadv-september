import {ChangeDetectionStrategy, Component, effect, input, Input, model, SimpleChanges} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {Person} from '../../../../../app.component';

@Component({
  selector: 'app-v2',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
    <p>
      {{person() | json}}
      <button (click)="increasePersonAge()">Increase age</button>
    </p>
  `,
  styleUrl: './v2.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class V2Component {
   person = model.required<Person>();

  constructor() {
    effect(() => {
      console.log(this.person())
    });
  }

  increasePersonAge() {
    this.person.update( p => ({ ...p, age: p.age + 1}))
  }
}
