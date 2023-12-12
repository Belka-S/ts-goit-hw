// Partial<T>

// Задача 1: Уявімо, що у вас є форма редагування профілю користувача.
// Користувач може вибирати, які поля він хоче оновити. Створіть тип для такої форми на основі існуючого типу User.

type User = { id: number; name: string; email: string; password: string };

const NewUser: Partial<User> = {
  id: 123321,
  name: 'John',
  email: 'test@mail.com',
  password: '111111',
};
NewUser.password = '123qwe';

//   Задача 2: У вас є конфігураційний об'єкт з декількома полями.
// Створіть функцію, яка приймає часткові налаштування та повертає повний конфігураційний об'єкт.

interface Config {
  name: string;
  length: number;
  width: number;
  height: number;
}

const Configuration: Config = {
  name: 'block',
  length: 100,
  width: 600,
  height: 300,
};

const changeConfiguration = (config: Partial<Config>): Config => {
  return { ...Configuration, ...config };
};

changeConfiguration({ width: 200 });

// Readonly<T>

// Задача 1: Ви розробляєте функцію, яка приймає масив чисел і повертає його ж,
// але ви хочете гарантувати, що функція не змінює вхідний масив.

const getArray = (arr: ReadonlyArray<number>) => arr;

// Задача 2: Створіть об'єкт конфігурації, який не можна змінювати після його створення.

interface Point {
  host: string;
  port: number;
}

const conf: Readonly<Point> = { host: 'localhost', port: 8000 };

// 3. Pick<T, K>

// Задача 1: У вас є об'єкт користувача і вам потрібно створити функцію,
// яка повертає лише ім'я та електронну пошту користувача.

interface User4 {
  id: number;
  name: string;
  email: string;
  age: number;
}

const user = { id: 123123, name: 'John', email: 'test@example.com', age: 25 };

function getCredentials({ name, email }: User4): Pick<User4, 'name' | 'email'> {
  return { name, email };
}

getCredentials(user);

// Задача 2: Ви хочете зберегти тільки певні поля з API-відповіді для відображення в UI.

interface Response {
  id: number;
  title: string;
  content: string;
}

const getResponse = (res: Response): Pick<Response, 'title' | 'content'> => {
  return { title: res.title, content: res.content };
};

// 4. Record<K, T>

// Задача 1: Ви хочете створити об'єкт, який мапить імена користувачів до їх віку.

const usersAgent: Record<string, number> = { John: 29, Helen: 25 };

// Задача 2: Мапа з іменами місяців до кількості днів у них.

enum Year {
  January,
  February,
  March,
  // April, May, June, July, August, September, October, November, Desember,
}

const year2023: Record<keyof typeof Year, number> = {
  January: 31,
  February: 28,
  March: 31,
};

// 5. Omit<T, K>

// Задача 1: У вас є тип користувача, але ви хочете створити новий тип
// без поля пароля для відправлення даних на клієнтську сторону.

type User6 = { id: number; name: string; email: string; password: string };

type SafeUser1 = Omit<User6, 'password'>;

const emploee: SafeUser1 = {
  id: 123123,
  name: 'Alice',
  email: 'alice@example.com',
};

//Задача 2: Ви хочете створити новий тип на основі API-відповіді, але без дати створення.

interface ApiResp {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
}

type NormalizedResponse = Omit<ApiResp, 'createdAt'>;

const data: NormalizedResponse = {
  id: 1,
  title: 'Title',
  content: 'Content',
};

// Робота з інтерфейсами

// Спроєктуйте інтерфейс для ресторанного меню. Він повинен містити поля:
// назва, ціна, категорія (наприклад, закуска, основна страва, десерт).
// Розробіть функцію, яка приймає список страв і фільтрує їх за категорією.

interface Menu {
  name: string;
  price: number;
  category: 'starter' | 'main' | 'dessert';
}

const dishes: Array<Menu> = [
  { name: 'Salad', price: 25, category: 'starter' },
  { name: 'Meat', price: 75, category: 'main' },
  { name: 'IceCream', price: 25, category: 'dessert' },
  { name: 'Fish', price: 65, category: 'main' },
];

const sortDishes = <T extends Array<Menu>>(arr: T): T =>
  arr.sort((a, b) => a.category.localeCompare(b.category));

sortDishes(dishes);

// Спроєктуйте інтерфейс для користувача з полями ім'я, email та дата народження.
// Після цього створіть функцію, яка перевіряє, чи є користувач повнолітнім.

interface UserData {
  name: string;
  email: string;
  birthday: string;
}

const isAdult = ({ birthday }: UserData): boolean => {
  const years =
    (Date.now() - new Date(birthday).valueOf()) / (365 * 24 * 60 * 60 * 1000);

  return years > 18 ? true : false;
};

isAdult({ name: 'John', email: 'John@example.com', birthday: '06.05.2015' });

// Робота з класами

// Спроєктуйте інтерфейс CarProperties з такими характеристиками, як brand, year та fuelType.
// Створіть клас Car, який реалізує цей інтерфейс і має метод getDetails(),
// що виводить інформацію про автомобіль.

enum FuelType {
  petrol,
  diesel,
  electric,
}

interface CarProps {
  brand: string;
  year: number;
  fuelType: keyof typeof FuelType;
}

class CarType implements CarProps {
  constructor(
    public brand: string,
    public year: number,
    public fuelType: keyof typeof FuelType,
  ) {}

  getInfo(): void {
    console.log(`This is ${this.brand} ${this.year} ${this.fuelType}.`);
  }
}

const Audi = new CarType('Audi', 2017, 'electric');

Audi.getInfo();

// Спроєктуйте інтерфейс StudentData з полями name, studentID та major.
// Створіть клас Student, який реалізує цей інтерфейс і має метод introduce(),
// де студент представляється.

type Subjects = 'economics' | 'engeneerings' | 'computer science';

interface StudentData {
  ID: number;
  name: string;
  subject: Subjects;
}

class Student implements StudentData {
  constructor(
    public ID: number,
    public name: string,
    public subject: Subjects,
  ) {}
  intruduce(): void {
    console.log(`I am ${this.name}, learn ${this.subject}. ID: ${this.ID}`);
  }
}

const Serhii = new Student(20222023, 'Serhii', 'computer science');

Serhii.intruduce();
