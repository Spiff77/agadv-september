import { NgModule } from '@angular/core';
import {ToUpperCasePipe} from './to-upper-case.pipe';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ToUpperCasePipe],
  imports: [FormsModule
  ], // Juste pour les modules
  exports:[ToUpperCasePipe, FormsModule] // Tout
})
export class SharedModule { }
