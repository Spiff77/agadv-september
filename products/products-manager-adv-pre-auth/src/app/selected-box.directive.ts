import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appSelectedBox]'
})
export class SelectedBoxDirective implements AfterViewInit{

  @Input() theme: string;

  constructor(private elRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.elRef.nativeElement.style.padding = '5px';

    if (this.theme === 'azur') {
      this.elRef.nativeElement.style.color = 'grey';
      this.elRef.nativeElement.style.backgroundColor = 'lightblue';
    } else if (this.theme === 'azur-reverse') {
      this.elRef.nativeElement.style.color = 'lightblue';
      this.elRef.nativeElement.style.backgroundColor = 'grey';
      this.elRef.nativeElement.querySelector('a').style.color = 'black';
    } else {
      this.elRef.nativeElement.style.color = 'black';
      this.elRef.nativeElement.style.backgroundColor = 'antiquewhite';
    }

  }
}
