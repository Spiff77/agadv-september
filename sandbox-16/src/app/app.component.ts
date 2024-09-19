import {Component, inject, OnInit} from '@angular/core';
import { NameService } from './name.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sandbox-16';

  fb = inject(FormBuilder)
  theForm!: FormGroup

  constructor(public ns: NameService) {}

  ngOnInit(): void {
    this.theForm = this.fb.group({
      name: '',
      colors: this.fb.array(['red', 'green'])
    })
  }

  getColorsFormArray(): FormArray {
    return this.theForm.get('colors') as FormArray
  }

  addColor() {
    this.getColorsFormArray().push(this.fb.control(''))
  }

  removeColor(index: number) {
    this.getColorsFormArray().removeAt(index)
  }
}
