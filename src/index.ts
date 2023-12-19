class House {
  private tenants: string[] = [];

  constructor(private readonly type: string, private street: string) {}

  public showAddress(this: House) {
    console.log('Address: ' + this.street);
  }
  public showType(this: House) {
    console.log('House Type: ' + this.type);
  }
  public addTenant(tenant: string) {
    this.tenants.push(tenant);
  }
  public showTenants() {
    console.log(this.tenants);
  }
}

class StoneHouse extends House {
  private chargeOfTheHouse: string;

  constructor(street: string, generalTenant: string) {
    super('stone', street);
    this.chargeOfTheHouse = generalTenant;
    this.addTenant(generalTenant);
  }

  public showTenants() {
    console.log('General: ' + this.chargeOfTheHouse);
    super.showTenants();
  }
}

const stoneHouse = new StoneHouse('Stone-world', 'Max');

stoneHouse.addTenant('Anton');
stoneHouse.addTenant('Nikita');
stoneHouse.showTenants();
stoneHouse.showType();
stoneHouse.showAddress();

// getter / setter

type PersonInformation = {
  firstName?: string;
  lastName?: string;
};

class Person {
  private personInfo: PersonInformation = {};

  set firstName(value: string) {
    console.log('firstName added');
    this.personInfo.firstName = value;
  }

  set lastName(value: string) {
    console.log('lastName added');
    this.personInfo.lastName = value;
  }

  get info() {
    const { personInfo } = this;
    return `${personInfo.lastName} ${personInfo.firstName}`;
  }
}

const person = new Person();
person.lastName = 'Pupkin';
person.firstName = 'Petha';

console.log(person.info);

// static

class UseStatic {
  private static count = 0;

  constructor() {
    UseStatic.count += 1;
  }

  public static itStaticMethod() {
    console.log('Run static method');
  }

  public showCount() {
    console.log(UseStatic.count);
  }
}

const obj1 = new UseStatic();
const obj2 = new UseStatic();

obj1.showCount();
obj2.showCount();
UseStatic.itStaticMethod();

// abstract classes

abstract class Plane {
  protected pilotInCabin = false;

  public sitInPlane() {
    this.pilotInCabin = true;
  }

  public abstract startEngine(): boolean;
}

class Maize extends Plane {
  public startEngine() {
    return true;
  }
}

class Boeing extends Plane {
  public startEngine() {
    return true;
  }
}

// class BrokenPlane extends Plane {}

// Interface for functions

interface AddFunc {
  (n1: number, n2: number): number;
}

const add: AddFunc = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(2, 3));

// 1 short syntax

class Student {
  constructor(public name: string, public age: number, public grade: string) {}
}
console.log('Student: ', Student);

// 2 Реалізуйте конструктор та збільшіть salary на 10000

class Employee {
  constructor(
    public name: string,
    private department: string,
    protected salary: number,
  ) {}

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}$`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string) {
    super(name, department, 12000);
  }
}

const SVS = new Manager('SVS', 'FC Dynamo');
console.log(SVS.getEmployeeDetails());

// 3 interface

interface ICharacter {
  name: string;
  level: number;
  introduce(phrase: string): void;
  levelUp(): void;
}

interface ISpellCaster {
  castSpell(): void;
}

class Wizard implements ICharacter, ISpellCaster {
  constructor(public name: string, public level: number) {
    if (this.level < 1) {
      throw new Error('Level too low');
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ', ' + this.name);
  }

  levelUp(): void {
    this.level += 1;
    console.log(`Level up! New level is ${this.level}`);
  }

  castSpell(): void {
    console.log('Casting a spell, behold my power!');
  }
}

const wizard = new Wizard('Merlin', 15);

wizard.introduce('I am the mighty wizard');
wizard.castSpell();
wizard.levelUp();

// 4 Classes Summary

// Key
class Key {
  private signature: number = Math.round(Math.random() * 100000);

  getSignature(): number {
    return this.signature;
  }
}
const key = new Key();
console.log('key: ', key);

// Person
class Human {
  constructor(private key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}
const human = new Human(key);
console.log('human: ', human);

// House
abstract class Home {
  protected door: boolean = false;
  protected tenants: Human[] = [];
  protected key: Key;

  abstract openDoor(key: Key): void;

  public comeIn(tenant: Human): void {
    if (this.door) {
      this.tenants.push(tenant);
    }
  }
}

class MyHome extends Home {
  constructor(key: Key) {
    super();
    this.key = key;
  }

  openDoor(key: Key): void {
    this.door = key === this.key ? true : false;
  }
}

const home = new MyHome(key);
console.log('home new: ', home);

home.openDoor(human.getKey());
console.log('home openDoor: ', home);

home.comeIn(human);
console.log('home comeIn: ', home);
