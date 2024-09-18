import {ITaxable} from './ITaxable';

export class Supplier implements ITaxable{


  constructor(private $id: number, private $companyName: string, private $bankAccountNumber: string, private $ca?: number) {
  }

  get companyName(): string {
    return this.$companyName;
  }

  set companyName(value: string) {
    this.$companyName = value;
  }

  get bankAccountNumber(): string {
    return this.$bankAccountNumber;
  }

  set bankAccountNumber(value: string) {
    this.$bankAccountNumber = value;
  }

  get id(): number {
    return this.$id;
  }

  set id(value: number) {
    this.$id = value;
  }

  get ca(): number {
    return this.$ca;
  }

  set ca(value: number) {
    this.$ca = value;
  }

  calculatedCa(): number {
    return this.ca * .8;
  }

}
