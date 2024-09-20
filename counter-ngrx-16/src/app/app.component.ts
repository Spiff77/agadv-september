import {ChangeDetectionStrategy, Component} from '@angular/core';

type Person = { name: string, age: number}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'counter-ngrx-16';


  constructor() {
  }



}
