let some: unknown;
some = 'Text';
let str: string;
if (typeof some === 'string') str = some;
str = some as string;

export {};

// let some:unknown;
// some = 'Text';
// let str: string;
// str = some;
