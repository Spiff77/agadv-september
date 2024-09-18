import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anonymize'
})
export class AnonymizeBankAccountPipe implements PipeTransform {

  transform(value: string, length?: number): string {
    if (!value){return 'ERROR'};
    return ( length && value.length > length) ? '[Invalid Bank Account number]' : value.substr(0, 4).padEnd(12, '*');
  }

}
