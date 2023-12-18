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

class BrokenPlane extends Plane {}

// Interface for functions

interface AddFunc {
  (n1: number, n2: number): number;
}

const add: AddFunc = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(add(2, 3));
