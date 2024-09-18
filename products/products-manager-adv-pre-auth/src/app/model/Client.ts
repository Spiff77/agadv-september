import {Person} from './Person';
import {Product} from './Product';

export class Client extends Person {

  private $productList: Product[];

  constructor(firstName: string, lastName: string, active= true, age?: number) {
    super(firstName, lastName, active, age);
  }

  get productList(): Product[] {
    return this.$productList;
  }

  set productList(value: Product[]) {
    this.$productList = value;
  }
}

