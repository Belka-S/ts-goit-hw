/*
  Створіть новий тип даних, який підходить для цих двох об'єктів.
*/

interface Page {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: Details;
}

interface Details {
  createAt: {};
  updateAt: {};
}

interface PageVar {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
}

type DetailsVar = { details: { createAt: {}; updateAt: {} } };

const page1: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};

const page2: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};

const page3: PageVar & DetailsVar = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  },
};

export {};

// const page1: Page = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// };

// const page2: Page = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt: new Date('2021-01-01'),
//     updateAt: new Date('2021-05-01'),
//   },
// };
