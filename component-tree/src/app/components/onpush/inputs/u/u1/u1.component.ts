import { ChangeDetectionStrategy, Component } from '@angular/core';
import {U2Component} from '../u2/u2.component';
import {JsonPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Person} from '../../../../../app.component';


@Component({
  selector: 'app-u1',
  standalone: true,
  imports: [
    U2Component,
    JsonPipe,
    FormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <h3>U: OnPush - {{'signal based Input'}}</h3>
      <div>
        <input type="text" [(ngModel)]="person.name" placeholder="Enter your name">
        <input type="number" [(ngModel)]="person.age" placeholder="Enter your age">
      </div>
      {{person | json}}
      <button (click)="changeNameRef()">Change name ref</button>
      <app-u2 [person]="person"></app-u2>
    </div>
  `,
  styleUrl: './u1.component.scss',
})
export class U1Component {
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
