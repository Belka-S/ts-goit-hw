// Index Properties

// 1
type Auto = { [key: string]: number };
const autos: Auto = { BMV: 12, Audi: 10, Opel: 18 };

// 2
interface User {
  [key: string]: number | string;
}
const user1: User = { name: 'John', age: 28 };

// Generics

// 3
function log1<T>(arg: T): T {
  return arg;
}
const log2 = <T>(arg: T): T => arg;

console.log(log1<string>('Hello 1'));
console.log(log2<number>(23));

// 4 Create function to revese array
const reveseArr = <T>(arr: T[]): T[] => arr.reverse();
const arr1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

console.log(reveseArr<number>(arr1));
console.log(reveseArr<string>(arr2));

// 5 Create function that takes obj and returns obj.key
const balls = { nike: 85, available: true };

const getObjKey2 = <T>(obj: T, key: keyof T): T[keyof T] => obj[key];
console.log(getObjKey2(balls, 'available'));

const getObjKey1 = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key];
console.log(getObjKey1(balls, 'nike'));

// 6
