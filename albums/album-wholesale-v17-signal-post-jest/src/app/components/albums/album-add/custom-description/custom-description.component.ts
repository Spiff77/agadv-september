import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-custom-description',
  templateUrl: './custom-description.component.html',
  styleUrls: ['./custom-description.component.scss'],
  standalone: true,
  imports: [
    MatInputModule,
    JsonPipe,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDescriptionComponent),
      multi: true
    }
  ]
})
export class CustomDescriptionComponent implements ControlValueAccessor{

  value = new FormControl('')

   propagateTouched = () => {};

  registerOnChange(fn: any): void {
    this.value.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.propagateTouched = fn;
  }

  writeValue(obj: any): void {
    this.value.setValue(obj);
  }
}
