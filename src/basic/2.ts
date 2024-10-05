//Як переписати JavaScript масив:let person = ['Max', 21];
// в TypeScript, використовуючи концепцію кортежів,
//щоб гарантувати,що перший елемент завжди буде рядком, а другий числом ?

type PersonTuple = [string, number];

let person: PersonTuple = ['Max', 21];

