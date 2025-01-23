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


// Funciones con parametros 

function restaFuncion(a, b) {
  let resta = a - b;
  console.log("La resta de ", a," - ", b," = ", resta);
  return resta
}
//  Funcion ordinaria se ejecuta asi -> funcion();
//  Funcion con parametros se ejecuta asi -> funcion(parametro1, parametro2);
let resultadoResta = restaFuncion(10, 5);

console.log(resultadoResta)

//  Funcion con parametros por defecto

function restaFuncionDefecto(a = 20, b = 5.5) {
  let resta = a - b;
  console.log("La resta de ", a," - ", b," = ", resta);
  return resta
}
let resultadoRestaDefecto = restaFuncionDefecto();

console.log(resultadoRestaDefecto)

// Funciones recursivas, son funciones que se llaman a si mismas

// Ejemplo: Factorial = n!
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(50));

// Ejemplo Infinito
function infinito(a) {
  console.log("Infinito", a);
  a++;
  return infinito(a);
}
infinito(1);

// Scope (alcance de las variables)
let scopeX = 10;
function scope() {
  let scopeX = 20;
  console.log(scopeX, "Desde la funcion");
  return scopeX + " Desde el return";
}

function hola(){
  return 10;
}
console.log(hola());

console.log(scopeX, "Desde el scope");
console.log(scope());

// function limitar(texto){
//   if(texto.length >= 30){
//     console.log("Texto es muy largo.");
//   }else{
//     return texto;
//   }
// }
// limitar();

// Metodos de cadenas de texto

let cadenaTexto = "Esto es una cadena de texto"; // (2, -5)
console.log(cadenaTexto);

// saber la longitud de la cadenas. Puede servir para fijar límites
console.log(cadenaTexto.length);


// Transformar todo a mayusculas
console.log(cadenaTexto.toUpperCase())

// Transformar todo a minusculas
console.log(cadenaTexto.toLowerCase())

// Obtener un caracter de la cadena
console.log(cadenaTexto.charAt(6)) // mediante metodo
console.log(cadenaTexto[6]) // mediante selector directo

// Verificar si una cadena contiene un texto
console.log(cadenaTexto.includes("cadena")); // true o false

// Reemplazar texto de una cadena
console.log(cadenaTexto.replace("texto","metodo"));

cadenaTexto.replace("texto","cadena"); // sin modificacion a la cadena original
// cadenaTexto = cadenaTexto.replace("texto","cadena"); // modificamos la cadena original
console.log(cadenaTexto);

// Obtenemos un substring (cortamos una cadena en 2)
console.log(cadenaTexto.slice(2,-5)) 

// -1 (valores negativos) indica valores de derecha a izquierda de la cadena
// 0 (valores positivos) indica valores de izquierda a derecha de la cadena

/*

  Ejercicios:

  Ejercicio 1:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la cadena de texto en mayusculas.
  Ejemplo: "Bienvenido" -> "BIENVENIDO".
  
  Ejercicio 2:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la cadena de texto en minusculas.
  Ejemplo: "BienVenIdO" -> "bienvenido".

  Ejercicio 3:
  Crear una funcion que reciba un texto e imprima la longitud de la cadena de texto.
  Si la longitud es mayor que 5, que se imprima la cadena recortada.
  Ejemplo: "Angel Arevalo" -> "Angel"

  Ejercicio 4:
  Crear una funcion que reciba un texto e imprima la primera letra y la ultima.
  Ejemplo: "Cadena de texto" -> "C <-> o"

  Ejercicio 5:
  Crear una funcion que reciba un texto e imprima la palabra "durazno" si se incluye en el texto
  Ejemplo: "Quiero comer durazno" -> "durazno" ó "no hay durazno" (si no esta la palabra durazno)

  Nota: Debes crear un boton en HTML para ejecutar cada ejercicio
  (5 botones), cada boton debe permitirle al usuario ingresar un texto y mostrarle al usuario
  el resultado del ejercicio correspondiente.

*/

// Arreglos, Arrays, Listas, etc.
// Son conjuntos de variables. Nota: Un arreglo es un tipo de dato

let frutas = ["Manzana", "Pera", "Sandia"];

console.log(frutas); // Mostrar toda la lista. 
// Importante: No sirve para mostrar directamente en HTML

console.log(frutas[0]); // Mostrar la primera fruta de la lista
console.log(frutas[1]); // Mostrar la segunda fruta de la lista
console.log(frutas[2]); // Mostrar la tercera fruta de la lista

let  aleatorio = ["Manzana", 10, true, null, undefined,[1,2,3]];

console.log(aleatorio[aleatorio.length - 1]);

// Acceder a un arreglo dentro de un arreglo

let actividades = [ // Matriz
  [ // [0]
    ["Actividad 1", "correr"], // [0][0]
    ["Actividad 2", "dormir"], // [0][1]
  ], // [1]
  ["Actividad 3", "comer"]
];

console.log(actividades[0][0][1]); // Visualizamos la palabra correr
console.log(actividades[0][1][0]); // Visualizamos la palabra Actividad 2

actividades[0][0][1] = "caminar";

console.log(actividades);

// Metodos para trabajar con arreglos

let arreglo = ["Manzana", "Pera", "Sandia", "Durazno", "Tamarindo"];
console.log("Arreglo original: ", arreglo);

// Longitud de un arreglo
console.log("Longitud: ",arreglo.length);

// Agregar un elemento al final del arreglo
arreglo.push("Uva");
console.log("Un elemento nuevo al final:",arreglo);

// Agregar un elemento al inicio del arreglo
arreglo.unshift("Mango");
console.log("Un elemento nuevo al inicio:",arreglo);

// Eliminar un elemento al final del arreglo
arreglo.pop();
console.log("Un elemento eliminado al final:",arreglo);

// Eliminar un elemento al inicio del arreglo
arreglo.shift();
console.log("Un elemento eliminado al inicio:",arreglo);

// Obtener el indice de un elemento del arreglo
console.log("Indice de la palabra Sandia: ",arreglo.indexOf("Sandia"));
// console.log(actividades[0][0].indexOf("caminar")); 
// indexOf solo funciona para arreglos, no matrices

// Reemplazar un elemento del arreglo
let indice = arreglo.indexOf("Sandia");
arreglo[indice] = "Durazno de la montana";
console.log("Un elemento reemplazado: ",arreglo);

// Ordenar un arreglo
arreglo.sort();
console.log("Arreglo ordenado: ",arreglo);
console.log("Arreglo original:", arreglo);

// Invertir un arreglo
arreglo.reverse();
console.log("Arreglo invertido: ",arreglo);
console.log("Arreglo original:", arreglo);

// Nota: Para no modificar el arreglo original deberemos hacer una copia
//  del arreglo con un arreglo auxiliar


// El operador spread (...)
// let arregloAux = arreglo;
// let arregloAux = [arreglo[0], arreglo[1], arreglo[2], arreglo[3], arreglo[4]];
let arregloAux = [...arreglo]; // ["Manzana", "Pera", "Sandia", "Durazno", "Tamarindo"]

// Obtener un sub arreglo
let subArreglo = arreglo.slice(1,3); // ["Pera", "Sandia"]
console.log("Sub arreglo: ",subArreglo);


//  Ciclos: for, while, do-while
//  Que son los ciclos?: Son estructuras de control que nos 
//  permiten repetir un bloque de codigo las veces que sean necesarias

// For
// i = i + 1; o i += 1; o i++;
console.log("Inicio del ciclo for");
for (let i = 0; i < 10; i++) {
  console.log(i);
}console.log("Fin del ciclo for");

let lista = ["Correr","Dormir", "Comer", "Estudiar", "Jugar"];

for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

let bandera = true;

for(let i = 0; i < lista.length; i++){
  if(lista[i] === "Dormir"){
    console.log("Estoy durmiendo");
  }else{
    bandera = false;
  }
}

if(bandera == false){
  console.log("No estoy durmiendo");
}

// Acomodar ese codigo para que, si en la lista se encuentra la palabra dormir y 
// no es el ultimo elemento, imprima "Estoy durmiendo", sin el mensaje de "no estoy durmiendo"




