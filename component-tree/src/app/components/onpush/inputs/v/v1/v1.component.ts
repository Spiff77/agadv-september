import { ChangeDetectionStrategy, Component } from '@angular/core';
import {U2Component} from '../../u/u2/u2.component';
import {JsonPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Person} from '../../../../../app.component';
import {V2Component} from '../v2/v2.component';


@Component({
  selector: 'app-v1',
  standalone: true,
  imports: [
    U2Component,
    JsonPipe,
    FormsModule,
    V2Component
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <h3>V: OnPush - signal model ( "two-way binding parent <-> children")</h3>
      <div>
        <input type="text" [(ngModel)]="person.name" placeholder="Enter your name">
        <input type="number" [(ngModel)]="person.age" placeholder="Enter your age">
      </div>
      {{person | json}}
      <button (click)="changeNameRef()">Change name ref</button>
      <app-v2 [(person)]="person"></app-v2>
    </div>
  `,
  styleUrl: './v1.component.scss',
})
export class V1Component {
  person: Person = {
    name: '',
    age: 0
  }

  changeNameRef() {
    this.person = {
      ...this.person
    }
  }
}
