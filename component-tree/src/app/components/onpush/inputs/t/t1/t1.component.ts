import { ChangeDetectionStrategy, Component } from '@angular/core';
import {R2Component} from '../../../r/r2/r2.component';
import {T2Component} from '../t2/t2.component';
import {FormsModule} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {Person} from '../../../../../app.component';

@Component({
  selector: 'app-t1',
  standalone: true,
  imports: [
    R2Component,
    T2Component,
    FormsModule,
    JsonPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <h3>T: OnPush - {{'@Input'}}</h3>
      <div>
        <input type="text" [(ngModel)]="person.name" placeholder="Enter your name">
        <input type="number" [(ngModel)]="person.age" placeholder="Enter your age">
      </div>
      {{person | json}}
      <button (click)="changeNameRef()">Change name ref</button>
      <app-t2 [person]="person"></app-t2>
    </div>
  `,
  styleUrl: './t1.component.scss',
})
export class T1Component {
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
