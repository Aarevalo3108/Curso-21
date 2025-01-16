// Ejecicio para practicar 


/*
  1. Calculadora V0
  Crea tres variables, A, B y un "operacion". 
  Asignarles un valor a cada uno

  Crea una condicion que verifique si el operador es +, -, *, /, %, **.
  Dependiendo del operador, realiza la operacion correspondiente con los dos numeros.
  Debes imprimir por consola el resultado.

  Opcional: hacer este ejercicio en DOM 
  (A, B y "operacion" deben ser ingresadas por el usuario y mostrar el resultado con alert)

  2. Meses del año
  Crea una variable llamada mes (numero) que imprima en consola el mes (letras).
  
  Opcional: hacer este ejercicio en DOM.

  Fecha de entrega: 16/01/2025
*/

/*
Forma sencilla
function calculadora(){
  let a = 5;
  let b = 10;
  let operacion = "+";
  let resultado;
  switch(operacion){
    case '+':
      resultado = a + b;
      break;
    case '-':
      resultado = a - b;
      break;
    case '*':
      resultado = a * b;
      break;
  }
  console.log(" La operacion: ", a,operacion,b," = ", resultado);
}*/

/*
Hecho con DOM
*/
function calculadora(){
  let a = Number(prompt("Ingresa el primer numero: "));
  let b = Number(prompt("Ingresa el segundo numero: "));
  let operacion = prompt("Ingresa el operador: ");
  let resultado;
  switch(operacion){
    case '+':
      resultado = a + b;
      break;
    case '-':
      resultado = a - b;
      break;
    case '*':
      resultado = a * b;
      break;
    case '/':
      resultado = a / b;
      break;
    case '%':
      resultado = a % b;
      break;
    case '**':
      resultado = a ** b;
      break;
  }

  let mensaje = `la operacion: ${a} ${operacion} ${b} = ${resultado}`;
  alert(mensaje);
  console.log(" La operacion: ", a,operacion,b," = ", resultado);
}

function calculadoraV1(){
  // Para obtener el valor del input
  let resultado = eval(document.getElementById("operacion").value);

  // Para mostrar el resultado y cambiar el texto del elemento con ID resultado
  document.getElementById("resultado").innerText = resultado;

  // Nota: Para seleccionar clases: document.getElementsByClassName("clase").
  console.log(" La operacion: " , resultado);
}

function mostrar(cambio = "derecha"){
  // Para seleccionar el elemento calculadora
  let calculadora = document.getElementById("calculadora");
  // Para mostrar o ocultar el elemento
  calculadora.classList.toggle("hidden");
}

