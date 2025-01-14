console.log("Hola mundo desde un archivo");
// alert("Hola mundo desde una alerta");


// Esto es un comentario de una sola línea
/*
  Esto es un 
  comentario de 
  varias líneas
*/

/*

  Variables.
  Las variables son contenedores de informacion:
  var: Variables Gobales,
  let: Variables locales,
  const: Constantes.

*/

// Declaracion
var nombre = "Angel";
let edad = 25;
const PI = 3.1416;

console.log(nombre, edad, PI);

nombre = "Luis";
edad = 30;
/*PI = 3; // Error*/

console.log(nombre, edad, PI);

/*function saludo() {
  let nombre = "Luis";
  console.log("Hola " + nombre + " tienes " + edad + " años");
}
console.log(nombre);*/

// Tipos de datos basicos
let string = `Hola mundo`; // Con ``, "", ''
let number = 25; // 25, 10, 20, -10, 0, -20
let decimal = 10.5; // 2.5, 3.5, 10.5, -0.2
let booleano = true; // true, false
let nulo = null; // null
let indefinido = undefined; // undefined
let indefinidoSinValor; // undefined

// Operadores Comparativos
let mayorQue = 10 > 5; // true
console.log(" 10 > 5", mayorQue);
let menorQue = 10 < 5; // false
console.log(" 10 < 5", menorQue);
let mayorOigual = 10 >= 8; // true
console.log(" 10 >= 8", mayorOigual);
let menorOigual = 10 <= 8; // true
console.log(" 10 <= 8", menorOigual);
let igual = 10 == "10"; // true
console.log(" 10 == 10", igual);
let diferente = 1 != true; // false
console.log(" 1 != true", diferente);
let estrictoIgual = 10 === "10"; // false
console.log(" 10 === '10'", estrictoIgual);

// Operadores aritmeticos
let suma = 10 + 5; // 15
console.log("10 + 5", suma);
let resta = 10 - 5; // 5
console.log("10 - 5", resta);
let multiplicacion = 10 * 5; // 50
console.log("10 * 5", multiplicacion);
let division = 10 / 5; // 2
console.log("10 / 5", division);
let potencia = 10^2; // 100
console.log("10 ** 2", potencia);
let modulo = 10 % 3; // 1
console.log("10 % 3", modulo);

// Operadores Logicos
let and = true && true; // true
console.log("true && true", and);
let andCondicion = (10 > 5) && (5 < 3); // false
console.log("(10 > 5) && (5 < 3)", andCondicion);
let or = true || false; // true
console.log("true || false", or);
let not = !true; // false
console.log("!true", not);

