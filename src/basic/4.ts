//Як ви вкажете типи для 
//аргументів і значень цих функцій, що повертаються ?

// Функція приймає рядок і нічого не повертає (тип повернення void)
function showMessage(message: string): void {
  console.log(message);
}

// Функція приймає два числа і повертає число
function calc(num1: number, num2: number): number {
  return num1 + num2;
}

// Функція не повертає значення, тому що генерує помилку (тип never)
function customError(): never {
  throw new Error('Error');
}

