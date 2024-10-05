//Створіть змінну, яка може містити або рядок,
//або число(union type) ? Також, оголосіть змінну,
//яка може містити лише одне з двох можливих рядкових значень:
//'enable'або 'disable'(literal type).

// Union type: змінна може містити або рядок, або число
let value: string | number;
value = "Hello";  
value = 42;       

// Literal type: змінна може містити лише 'enable' або 'disable'
let status: 'enable' | 'disable';
status = 'enable';  
status = 'disable';


