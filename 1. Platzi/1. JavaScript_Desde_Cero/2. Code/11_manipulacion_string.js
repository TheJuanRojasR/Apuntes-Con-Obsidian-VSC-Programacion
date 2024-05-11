// Clase 11 - Manipulación de strings

// 1. Primitivo String
const primitiveString = 'I am a primitive String'
console.log(typeof primitiveString);

// 2. Objeto String
const stringObject = new String('I am a string object');
console.log(typeof stringObject);

// Metodos de los strings
// Acceder a un caracter de un string
const stringExample = 'Hello World. I am a string';

// 1. Caracter en una posición
console.log(stringExample[0]);
// 2. charAt
console.log(stringExample.charAt(0));
// 3. indexOf
console.log(stringExample.indexOf('o')); // Muestra la primera aparición
console.log(stringExample.indexOf('string')); // Muestra -1 si no lo encuentra
// 4. lastIndexOf
console.log(stringExample.lastIndexOf('o')); // Muestra la última aparición
// 5. slice
console.log(stringExample.slice(6, 11)); // Sirve para cortar un string
// 6. split
console.log(stringExample.split(' ')); // Divide el string en un array
// 7. length
console.log(stringExample.length); // Muestra la longitud del string
// 8. toLocaleLowerCase
console.log(stringExample.toLocaleLowerCase()); // Convierte el string a minúsculas 
// 9. toLocaleUpperCase
console.log(stringExample.toLocaleUpperCase()); // Convierte el string a mayúsculas
// 10. trim
console.log(stringExample.trim()); // Elimina los espacios al principio y al final del string
// 11. replace
console.log(stringExample.replace('string', 'number')); // Reemplaza una palabra por otra


