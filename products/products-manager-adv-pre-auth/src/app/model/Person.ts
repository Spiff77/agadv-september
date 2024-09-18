export class Person {

    private $id = 0;

    constructor(private $firstName: string, private $lastName: string, private $active: boolean = true, private $age: number = 0) {
    }

    get id(): number {
      return this.$id;
    }

    set id(value: number) {
      this.$id = value;
    }

    get firstName(): string {
      return this.$firstName;
    }

    set firstName(value: string) {
      this.$firstName = value;
    }

    get lastName(): string {
      return this.$lastName;
    }

    set lastName(value: string) {
      this.$lastName = value;
    }

    get fullName(): string {
        return this.$firstName + ' ' + this.$lastName;
    }

    get age(): number {
      return this.$age;
    }

    set age(value: number) {
      this.$age = value;
    }

    get active(): boolean {
      return this.$active;
    }

    set active(value: boolean) {
      this.$active = value;
    }
}
