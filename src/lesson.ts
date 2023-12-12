// Index Properties

// type Goods = {
//   [key: string]: number;
// };

// type Fruits = {
//   apples: number;
//   banana: number;
//   orange: number;
// };

// type FrozenGoods = {
//   iceCream: number;
//   fish: number;
//   berry: number;
// };

// const fruits: Goods = {
//   apples: 15,
//   banana: 30,
//   orange: 30,
// };

// const frozenGoods: Goods = {
//   iceCream: 25,
//   fish: 30,
//   berry: 10,
// };

// const myDict: StringDictionary = {
//   prop1: "value1",
//   prop2: "value2",
// };

// У цьому прикладі інтерфейс StringDictionary може мати будь - яку кількість властивостей,
//   але всі їх ключі мають бути рядками, і всі значення також мають бути рядками.

// type UserDictionary = {
//   [id: number]: { name: string; age: number };
// };

// const users: UserDictionary = {
//   1: { name: "John", age: 30 },
//   2: { name: "Anna", age: 25 },
// };

// Тут кожний ключ об'єкта users вказує на ID користувача, а значення представляє деталі цього користувача.

// Завдання для студентів:

// Створення словника:

// Створіть інтерфейс для словника, де ключем є рядок, а значенням — число.
// Створіть кілька об'єктів цього типу, наприклад, для зберігання кількості товарів різних категорій.

// Словник із змішаними значеннями:

// Визначте інтерфейс для об'єкта, де ключем є рядок, а значенням може бути або рядок, або число.
// Створіть декілька об'єктів цього типу.

// type MixedType = {
//   [key: string]: string | number;
// };

// const userInfo: MixedType = {
//   name: "Bob",
//   age: 23,
//   country: "Ukraine",
// };

// const bookDetails: MixedType = {
//   title: "Bible",
//   pageCount: 350,
// };

// Generics

// 1. Створюють загальні функції, класи, що можуть працювати з різними вхідними типами і збрерігати типізацію

// function identity<T>(arg: T): T {
//   return arg;
// }

//1
// function identity<string>(arg: string): string {
//   return arg;
// }

// 2
// function identity<number>(arg: number): number {
//   return arg;
// }

// let output1 = identity<string>("myString");
// let output2 = identity<number>(100);

// Завдання для студентів

//  Створіть загальну функцію reverse, яка приймає масив будь-якого типу і повертає масив у зворотньому порядку.

// function reverse<K>(items: K[]): K[] {
//   return items.reverse();
// }

// let numbers = reverse<number>([1, 2, 3, 4, 5]);
// console.log(numbers); // [5, 4, 3, 2, 1]

// let strings = reverse<string>(["a", "b", "c", "d"]);
// console.log(strings); // ["d", "c", "b", "a"]

// let i const - звертаємся по назві змінної
// <> - звертаємося по назві дженерика

// extends та key of

// function lengthOfObject<T extends { duration: number }>(obj: T): number {
//   return obj.duration;
// }

// lengthOfObject({ name: "Earth", duration: 10 }); // 10

// type obj = {
// name: string
//   length: number
// }

// Створіть загальну функцію getProperty, яка приймає об'єкт та ключ як рядок.
// Функція повинна повертати значення цього ключа з об'єкта.

// const student = {
//   name: "John",
//   age: 25,
//   groupNumber: 12,
// };

// // type Student = {
// //   name: string;
// //   age: number;
// // };

// function getProperty<ObjectType, KeyType extends keyof ObjectType>(obj: ObjectType, key: KeyType): ObjectType[KeyType] {
//   return obj[key];
// }

// let studentName = getProperty(student, "name");
// console.log(studentName); // "John"

// let studentAddress = getProperty(student, "address");
// console.log(studentAddress); // undefined

// patrial <T>

// type Todo = {
//   title: string;
//   description: string;
//   completed: boolean;
// };

// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
//   return { ...todo, ...fieldsToUpdate };
// }

// const todo1: Todo = {
//   title: "Learn TypeScript",
//   description: "Study the basics of TypeScript",
//   completed: false,
// };

// const todo2 = updateTodo(todo1, {
//   description: "Study generics in TypeScript",
// });

// console.log(todo2);

// ReadOnly

// type User = {
//   name: string;
//   age: number;
// };

// const john: Readonly<User> = {
//   name: "John",
//   age: 30,
// };

// john.age = 31; // Помилка: Неможливо змінити 'age', тому що воно є лише для читання.

// const numbers: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// numbers.push(6); // Помилка: Property 'push' does not exist on type 'readonly number[]'.
// numbers[0] = 0; // Помилка: Index signature in type 'readonly number[]' only permits reading.

// Pick<T, K>

// type Person = {
//   name: string;
//   age: number;
//   address: string;
// };

// type PersonSummary = Pick<Person, "name" | "age">;

// // type PersonSummary = {
// //   name: string;
// //   age: number;
// // };

// const johnSummary: PersonSummary = {
//   name: "John",
//   age: 30,
// };

// Це спрацює, тому що 'address' не є частиною типу 'PersonSummary'
// const invalidPerson: PersonSummary = {
//     name: "Anna",
//     age: 25,
//     address: "123 Main St"  // Помилка тут
// };

// Record<K, T>

// type CityDatabase = Record<string, number>;

// const database: CityDatabase = {
//   Kyiv: 2884000,
//   Kharkiv: 1441000,
//   Odesa: 1015000,
// };

// // Додаємо новий запис в базу даних, де ключ (ім'я міста) має тип string, а значення (населення) має тип number
// database.Lviv = 721301;

//  Omit<T, K>

// type Person = {
//   name: string;
//   age: number;
//   address: string;
// };

// type PersonWithoutAddress = Omit<Person, "address">;

// const john: PersonWithoutAddress = {
//   name: "John",
//   age: 30,
//   // address: "123 Main St" // Ця властивість тут не допустима
// };

// function getPromise(): Promise<(string | number)[]> {
//   return new Promise<(string | number)[]>((resolve) => {
//     resolve(["Text", 50]);
//   });
// }

// getPromise().then((data) => {
//   console.log(data);
// });

// interface

// interface Person {
//   firstName: string;
//   lastName: string;
//   getFullName(): string;
// }

// const john: Person = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// interface Movable {
//   speed: number;
//   move(): void;
// }

// class Car implements Movable {
//   speed: number;

//   constructor(speed: number) {
//     this.speed = speed;
//   }

//   move() {
//     console.log(`Car is moving at ${this.speed} km/h.`);
//   }
// }

// interface Example {
//   mandatoryProp: string;
//   optionalProp?: string;
// }

// interface Example {
//   readonly fixedProp: string;
// }

// interface Parent {
//   prop1: string;
// }

// interface Child extends Parent {
//   prop2: string;
// }

// --------------------------------- //

// Index Properties

interface Dictionary {
  [key: string]: number;
}

let fruits: Dictionary = {
  apples: 10,
  bananas: 5,
  oranges: 8,
};

let electronics: Dictionary = {
  phones: 25,
  laptops: 10,
  tablets: 7,
};

let books: Dictionary = {
  fiction: 15,
  history: 20,
  fantasy: 9,
};

interface MixedDictionary {
  [key: string]: string | number;
}

let userInfo: MixedDictionary = {
  username: 'alex',
  age: 25,
  country: 'Ukraine',
  postalCode: 12345,
};

let productInfo: MixedDictionary = {
  productName: 'Laptop',
  model: 'X-123',
  price: 1000,
  weight: 1.5,
};

let bookDetails: MixedDictionary = {
  title: 'TypeScript Guide',
  author: 'John Doe',
  pages: 320,
  edition: 'second',
};

// Generic

function reverse<T>(items: T[]): T[] {
  return items.reverse();
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] | undefined {
  return obj[key] || undefined;
}
