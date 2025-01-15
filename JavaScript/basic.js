console.log("Hola mundo desde un archivo");
// alert("Hola mundo desde una alerta");


// Esto es un comentario de una sola línea
/*
  Esto es un 
  comentario de 
  varias líneas

  (Comentario en VScode: Ctrl + / o Ctrl + K + C)
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
// Trabajando con DOM
// var nombre = document.getElementById("nombre").value;
// Trabajando con Prompt
// var nombre = prompt("Ingresa tu nombre");
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
let booleano = true; // true, false (tambien puede ser 1 o 0)
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
console.log(" 10 === '10'", estrictoIgual); // el valor y el tipo de dato deben ser iguales

// Operadores aritmeticos
// let suma = 10 + 5; // 15
// console.log("10 + 5", suma);
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
let and = true && false; // false
console.log("true && false", and);
let andCondicion = (10 > 5) && (5 < 3); // false
console.log("(10 > 5) && (5 < 3)", andCondicion);
let or = true || false; // true
console.log("true || false", or);
let not = !true; // false
console.log("!true", not);

// Operador de asignacion
let asignacion = 10;


// Condicionales
let condicion = 25 < 15;

if (condicion){
  console.log("La condicion es verdadera");
} else if (condicion) {
  console.log("La condicion es falsa");
} else {
  console.log("La condicion no es ni verdadera ni falsa");
}

//  Ejemplo condicionales

let edadUsuario = 18;

if (edadUsuario >= 18){
  console.log("Eres mayor de edad");
} else if ((edadUsuario < 18) && (edadUsuario >= 10)) {
  console.log("Eres menor de edad");
} else if ((edadUsuario < 10) && (edadUsuario >= 5)) {
  console.log("Eres un niño");
} else if ((edadUsuario < 5) && (edadUsuario >= 0)) {
  console.log("Edad un bebe");
} else {
  console.log("Edad no valida");
}

// Switch
/*let dia = prompt("Ingresa un numero del 1 al 7");
switch (Number(dia)) {
  case 1:
    alert("Lunes");
    break;
  case 2:
    alert("Martes");
    break;
  case 3:
    alert("Miercoles");
    break;
  case 4:
    alert("Jueves");
    break;
  case 5:
    alert("Viernes");
    break;
  case 6:
    alert("Sabado");
    break;
  case 7:
    alert("Domingo");
    break;
  default:
    alert("Dia no valido");
    break;
}*/


// Ejercicios:

// Facil

const uno = !true || false; //false
console.log("numero 1:", uno)
const dos = false && !false; //false
console.log("numero 2:", dos);
const tres = true && !false; // true
console.log("tres: ", tres);

// Medio

const cuatro = (5 === 5) || (!true); // true
console.log("cuatro :", cuatro);
const quinto = (!0) || (5 < 0); // true
console.log("quinto :", quinto);
const sexto = (3 < 4) && ((!0) || (!0) || (5 < 0) && (5 === 5) || (!true)); // false
console.log("sexto: ",sexto);

// Avanzado

const siete = (((false || (true)) && (!false && true) )) || (true && false);
console.log("siete:", siete);

const x = 6;
const y = 3;
const z = 9;

const ocho = (x === y+y) && (z/y >= x);
console.log("ocho: ", ocho);

const nueve = (!(!(false)) ||  (("1" == 1)) && (!false === true) );
console.log("nueve: ", nueve);


const diez = !(!true) === !(!(5 >= "5"));
console.log("diez: ", diez);

const once = !( true && (!true === !( !(8 === 4*2) )) );
console.log("once: ", once);

// Ejercicios para practicar "en casa"

const doce = !( true && (!true === !( !(16 === (4*2) + 8))) ) !== (false);
console.log("doce: ", doce); // true

const trece = !(((!(!(10 / 5 == "2") === false) != false) === ((5 * 5) <= (100 / 4))) && (!((1 + 1) !== (10 / 5)) !== (true)));
console.log("trece: ", trece); // true

// nota: diferenciar es equivalente a igualar e invertir 
// false !== true // true
// false == !true // true

// Funciones

function suma() {
  let a = 10;
  let b = 25;
  let suma = a + b;

  console.log("La suma de 10 + 25 = ", suma);
  return suma
}

let resultado = suma();


// Ejemplo con DOM

function sumaDOM(){
  let a = Number(prompt("Escribe un numero: "));
  let b = Number(prompt("Escribe otro numero: "));

  let suma = a + b;
  console.log("La suma de ", a," + ", b," = ", suma);

  //alert("La suma de ", a," + ", b," = ", suma); // solo se ve "La suma de"
  
  // Incrustar variables en un texto:
  let mensaje = "La suma de " + a + " + " + b + " = " + suma;

  // Uso de los ``
  mensaje = `La suma de ${a} + ${b} = ${suma}`;

  alert(mensaje);
}





