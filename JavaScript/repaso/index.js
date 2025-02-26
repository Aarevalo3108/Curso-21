console.log("Hola Mundo");

// Comentarios, son ignorados por el navegador
// Variables

var nombre = "Angel";
let apellido = "Perez";
const edad = 25;
const Booleano = true; // true o false


// Alcance de variables

let Numero = 10;

function sumar(){
  let letra = "A";
  console.log(Numero);
  return letra
}

const primeraVocal = sumar();

// Operadores comparativos

console.log("10 > 5", 10 > 5);
console.log("10 < 5", 10 < 5);
console.log("10 >= 5", 10 >= 5);
console.log("10 <= 5", 10 <= 5);
console.log("10 == 5", 10 == 5);
console.log("10 != 5", 10 != 5);

console.log("5 === 5", "5" === 5);
console.log("5 !== 5", "5" !== 5);

// Operaciones de Transformacion de datos

const nulo = null;
const indefinido = undefined;
const falso = false;

console.log("null == false", nulo == falso);
console.log("null === false", null === false);

console.log("undefined == false", undefined == false);
console.log("undefined === false", undefined === false);

console.log("NaN == false", NaN == false);
console.log("NaN === false", NaN === false);

console.log('0 == undefined', 0 == undefined);
console.log('0 === undefined', 0 === undefined);

console.log("0 == false", 0 == false);
console.log("0 === false", 0 === false);

console.log("'' == false", "" == false);
console.log("'23' == true", "23" == true);

function enviarInformacion(){
  let valor = document.getElementById("valor").value;
  console.log("el tipo de dato de la variable es: ", typeof valor);
  console.log("El valor ingresado sin modificar es: ", valor);

  

  if (valor > 20){
    valor = "El valor es mayor a 20";
  } else{
    valor = "El valor es menor a 20";
  }

  document.getElementById("resultado").innerText = valor;

  console.log("El valor modificado es: ", valor);
}

// IIFE

(function(){console.log("Esto es una IIFE");})();

// Detectart cuando el usuario abre las DevTools

// (function(){
//   let devtools = null;
//   const element = new Image();
//   Object.defineProperty(element , 'id', {
//     get: function(){
//       devtools = true;
//     }}
//   );
//   setInterval(function(){
//     devtools = false;
//     console.log(element);
//     if(devtools){
//       alert("El usuario abre las DevTools");
//     }
//   }, 1000);
// })();


//  Funcion para detectar si las DevTools estan abiertas

// function detectDevTool() {
//   const time = 10;
//   const start = performance.now();
//   debugger;
//   const end = performance.now();
//   if (end - start > time) {
//     document.getElementById('body').hidden = true;
//     alert("devTool open")
//     return true;
//   }
//   document.getElementById('body').hidden = false;
//   console.log("devTool NOT open")
//   return false;
// }
  
// setInterval(detectDevTool, 1000);

(function() {
  let devtoolsOpen = false;
  let previousWidth = window.outerWidth;
  let previousHeight = window.outerHeight;

  function checkDevtools() {
    const currentWidth = window.outerWidth;
    const currentHeight = window.outerHeight;

    const widthDiff = Math.abs(currentWidth - previousWidth);
    const heightDiff = Math.abs(currentHeight - previousHeight);

    // Dynamic threshold based on window size
    const threshold = Math.max(50, Math.min(150, Math.min(window.outerWidth, window.outerHeight) * 0.1));

    const isOpen = (widthDiff > threshold || heightDiff > threshold);

    if (isOpen && !devtoolsOpen) {
      devtoolsOpen = true;
      console.log("DevTools: Opened");
    } else if (!isOpen && devtoolsOpen) {
      devtoolsOpen = false;
      console.log("DevTools: Closed");
    } else if (isOpen && devtoolsOpen) {
      console.log("DevTools: Still Open");
    }

    previousWidth = currentWidth;
    previousHeight = currentHeight;
  }

  setInterval(checkDevtools, 500);
})();

// Funcion

function saludar(){
  console.log("Hola Mundo");
}

saludar();


// Switch
// let dia = prompt("Ingresa un numero del 1 al 7");
let dia = 1;
let diaSemana;
switch (dia) {
  case '1':
    diaSemana = "Lunes";
    alert("Lunes");
    break;
  case '2':
    diaSemana = "Martes";
    alert("Martes");
    break;
  case '3':
    diaSemana = "Miercoles";
    alert("Miercoles");
    break;
  case '4':
    diaSemana = "Jueves";
    alert("Jueves");
    break;
  case '5':
    diaSemana = "Viernes";
    alert("Viernes");
    break;
  case '6':
    diaSemana = "Sabado";
    alert("Sabado");
    break;
  case '7':
    diaSemana = "Domingo";
    alert("Domingo");
    break;
  default:
    diaSemana = "Dia no valido";
    // alert("Dia no valido");
    break;
}

console.log(diaSemana);



// Calculadora con Switch

let num1 = parseInt(prompt("Ingresa el primer numero"));
let num2 = parseInt(prompt("Ingresa el segundo numero"));
let operacion = prompt("Ingresa la operacion deseada");
let resultado;

switch (operacion) {
  case '+':
    resultado = num1 + num2;
    break;
  case '-':
    resultado = num1 - num2;
    break;
  case '*':
    resultado = num1 * num2;
    break;
  case '/':
    resultado = num1 / num2;
    break;
  case '%':
    resultado = num1 % num2;
    break;
  //case '**' || '^': // No es posible evaluar el caso si hay un operador
  case '**':
  case '^':
    resultado = num1 ** num2;
    break;
  default:
    console.log("Operacion no valida");
    break;
}
// eval()
alert("El resultado es: " + resultado);

console.log(eval("100 + 200*2"));