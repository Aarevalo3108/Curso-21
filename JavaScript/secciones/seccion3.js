/*

ES6: ECMAScript 6 -> 2015

Añadio map, arrow functions, spread operador, destructuracion

(Operador ternario)

Escritura de map -> Array.map()
Descripcion: Itera sobre un array 
            , aplica una funcion a cada elemento 
            y devuelve un nuevo array.

*/

const numeros = [1,2,3,4,5];
// Cuando una funcion recibe como parametro otra funcion, 
// se le llama **callback**

// Cuando una funcion no tiene nombre se le llama **funcion anonima**
const cuadrados = numeros.map(
  function(valor, indice, array){
    console.log("El valor es: ", valor);
    console.log("El indice es: ", indice);
    console.log("El array es: ", array);
    return valor * valor;
  }
);

console.log(cuadrados);

// Ejemplo de map

const lista = ["Correr",-2 ,"Comer",3.2 ,"Dormir",45 ,"Estudiar","Jugar",5];

const lista1 = []; // Arreglo para numeros
const lista2 = []; // Arreglo para strings

function ordenamiento(elemento){
  if(typeof elemento === "number"){
    lista1.push(elemento);
  } else if (typeof elemento === "string") {
    lista2.push(elemento);
  } else{
    console.log("Elemento no valido");
  }
}

// lista.map(ordenamiento()); <- de esta manera no funciona, se ejecutaria una sola vez

lista.map(ordenamiento);

console.log("Lista 1: ", lista1);
console.log("Lista 2: ", lista2);

// Arrow functions -> Otra forma de declarar funciones

// Tradicional
function sumarTradicional(a, b){
  return a + b;
}

// de tipo Arrow
const sumarFlecha = (a, b) => a + b;

console.log(sumarFlecha(10,20));

// Operador ternario -> Es una condicion que se evalua y devuelve un valor

// Condicional tradicional:
let condicion = true;
if(condicion){
  //  valor si se cumple la condicion
}else{
  // valor si no se cumple la condicion
}

// Operador ternario:
condicion ? true : false

// Ejemplo de operador ternario
let edadTernario = 18;
// (Condicion) ? (valor si se cumple la condicion) : (valor si no se cumple la condicion)
let mensaje = (edadTernario >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);


// Anidaciones de operadores ternarios

let mensaje2 = (edadTernario >= 18) ? (edadTernario >= 25) ? "Eres mayor de edad" : "Eres adulto" : (edadTernario >= 16) ? "Eres adolescente" : "Eres menor de edad";

console.log(mensaje2);

// Spread operador -> Permite expandir un array en una lista de argumentos
const numeros1 = [1,2,3,4,5];
const numeros2 = [6,7,8,9,10];

// const numeros3 = [...numeros1, ...numeros2];
console.log([...numeros1, ...numeros2]);

// Destructuracion -> Permite desestructurar un objeto o un array
const persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 20
}

const { nombre, apellido, edad } = persona;

console.log(persona);

console.log(nombre);
console.log(apellido);
console.log(edad);


const personas = [
  {
    nombre: "Juan",
    apellido: "Perez",
    edad: 20,
    ocupaciones: ["Estudiante", "Desarrollador"],
    contratado: true
  },
  {
    nombre: "Maria",
    apellido: "Salome",
    edad: 25,
    ocupaciones: ["Desarrollador"],
    contratado: true
  },
  {
    nombre: "Manuel",
    apellido: "Hernandez",
    edad: 30,
    ocupaciones: ["Ingeniero", "Desarrollador"],
    contratado: false
  },
  {
    nombre: "Luis",
    apellido: "Gomez",
    edad: 35,
    ocupaciones: ["Estudiante"],
    contratado: true
  }
  
]

const [persona1,{ocupaciones, contratado}] = personas;

// const { sprites: { front_default } } = response.data;
// listaImagenes.push(front_default);
console.log(persona1);
console.log(ocupaciones);
console.log(contratado ? "Contratado" : "No contratado");


// DOM -> Document Object Model
// Todo lo referente a la estructura del HTML se encuentra en el DOM
// Los elementos HTML se consideran de tipo Nodo (Node)
// Document se considera el nodo raiz, de el surge el resto de los nodos

console.log(document); // Vamos a visualizar todo el documento HTML

// Crear un nuevo elemento en el DOM
const div = document.createElement("div");

// InnerHTML -> Contenido de un elemento
div.innerHTML = "<h1>Titulo</h1>";
// InnerText -> Texto de un elemento (sin interpretacion de etiquetas HTML)
// div.innerText = "<h1>Titulo</h1>";

// className -> Clase de un elemento
div.className = "contenedor";

// id -> Identificador de un elemento
div.id = "contenedor";

// style -> Estilos de un elemento
div.style.backgroundColor = "red";


// Agregar elementos al DOM
document.body.appendChild(div);

/*

Selectores en JavaScript
Con el objeto document podemos seleccionar elementos del DOM, como por ejemplo:

- ID: document.getElementById("id")
- Clase: document.getElementsByClassName("clase")
- Etiqueta: document.getElementsByTagName("etiqueta")
- Selector: document.querySelector("selector")
- Selector All: document.querySelectorAll("selector")

*/


// Seleccionar por el nombre de la etiqueta

const contenedor = document.querySelector("div");

console.log(contenedor);

contenedor.innerText = "Nuevo texto";

contenedor.innerHTML = "<a href='#'>Enlace</a>";


// Selector por ID <- mas comun
const seccion = document.getElementById("seccion");

console.log(seccion);

for (let i=0; i <100; i++){
  const parrafo = document.createElement("p");
  parrafo.innerText = `Parrafo ${i}`;
  seccion.appendChild(parrafo);
}

// Selector de etiquetas completo

const listaLi = document.querySelectorAll("li");


// Modificar las clases de un elemento
listaLi[2].classList.value = "item-3 generico rojo fondo-verde azul";
// listaLi[2].classList.push("rojo"); <- No funciona debido a que no es un arreglo como tal

console.log(listaLi);


// Selector por clase

const item = document.getElementsByClassName("item");

console.log(item); // va a seleccionar todos los elementos que tengan la clase item

// Seleccionar un ID por querySelector

const item3 = document.querySelector("#item-3");

console.log(item3);


// For each -> Permite iterar sobre un array

listaLi.forEach((li, index) => {
  li.innerText = `Nuevo texto ${index*2}`; 
});

/*
  Funciones asociada a document
  document.getElementById("id") -> Selector de elementos por id
  document.getElementsByClassName("class") -> Selector de elementos por clase (Devuelve un arreglo)
  document.getElementsByTagName("etiqueta") -> Selector de elementos por etiqueta (Devuelve un arreglo)
  document.querySelector("selector") -> Selector de elementos por cualquier selector de css
  document.querySelectorAll("selector") -> Selector de elementos por cualquier selector de css (Devuelve un arreglo)
  document.createElement("etiqueta") -> Crea un elemento html
  document.removeChild(elemento) -> Elimina un elemento html
  document.appendChild(elemento) -> Agrega un elemento html como hijo
  document.replaceChild(elemento, elemento) -> Reemplaza un elemento por otro
  
  document.getElementById("id").innerHTML -> Obtiene el contenido html de un elemento
  document.getElementById("id").value = "valor" -> Asigna un valor a un elemento
*/




// Ejercicios para pracvticar ES6, DOM, selectores
// Todo por JS
// 1. En un documento HTML crear una lista de 10 elementos <li> con los numeros del 1 al 10
// 2. Crea un boton y modifica su texto y sus estilos 

// 3. Aplicale estilos a esa lista del ejercicio 1 de elementos
// Seria tipo: <li class="Rojo"></li>, <li class="Verde"></li>
// 4. Crea una lista de imagenes (maximo 10) con esta estructura:
// {
//   "id": n1,
//   "title": "n1",
//   "url": "https://picsum.photos/200"
// }, ...
// cada elemento img seria: <img id="id" src="url" alt="title">

const imgObject = document.querySelectorAll("img");

console.log(imgObject); // Spoiler de las imagenes


//  Eventos

// Evento click

const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  console.log("Click");
  // document.getElementById("parrafo").classList.toggle("escondido");
});

// clase escondido:
// .escondido{
//   transform: translateX(0);
//  }

// Evento mouseover

const parrafo = document.getElementById("parrafo");

parrafo.addEventListener("mouseover", () => {
  console.log("Mouse over");
});


// Evento mouseout

const parrafo2 = document.getElementById("parrafo2");

parrafo2.addEventListener("mouseout", () => {
  console.log("Mouse out");
});


/*

Expresiones Regulares: Regex
Se usan para buscar patrones en cadenas de texto

*/

// Como lo haciamos antes

const malasPalabras = ["recorcholis", "baboso", "chispitas", "chupetin"];

let texto = "Recorcholis , este baboso es un chupetin y se llama chispitas, recorcholis";

// Expresiones Regulares

const regex = /recorcholis|baboso|chupetin|chispitas/gi;

// Desflose de la expresion regular:
// / / -> Inicio y fin de la expresion regular
// recorcholis|baboso|chupetin|chispitas -> Patrones de busqueda
// g -> Global
// i -> Ignorar mayusculas

console.log(texto.replace(regex, "****"));

texto.replaceAll(regex, "****");

malasPalabras.map((palabra) => {
  if (texto.includes(palabra)) {
    texto = texto.replace(palabra, "****");
  }
});

console.log("Texto censurado :",texto);

// console.log("Texto no censurado :",texto);

// for (let i = 0; i < malasPalabras.length; i++) {
//   const palabra = malasPalabras[i];
//   if (texto.includes(palabra)) {
//     texto = texto.replace(palabra, "****");
//   }
// }

// console.log("Texto censurado :",texto);


// Expresion regular para evaluar nombres

const regex2 = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;

// Desglose de esta expresion:

// ^ -> Inicio de la cadena
// [a-zA-Z] -> Caracteres de la A a la Z y de la a a la z
// + -> Uno o mas
// $ -> Fin de la cadena

const nombre2 = "Pepé Pig    ";

console.log(regex2.test(nombre2)); // true


// Expresion regular para evaluar emails
// En formato: abc@example.com
const regex3 = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

// Desglose de esta expresion:

// ^ -> Inicio de la cadena
// [a-zA-Z0-9] -> Caracteres de la A a la Z y de la a a la z y de los 0 al 9
// + -> Uno o mas
// $ -> Fin de la cadena

const email = "angel@hotmail.com.ve";

console.log(regex3.test(email));

//  Evaluar numeros de telefono
//  en formato +000000000000
//  Ejemplo: +584121032843

const regex4 = /^\+\d{12}$/;

// Desglose de esta expresion:

// ^ -> Inicio de la cadena
// + -> Uno o mas
// \d{12} -> 12 digitos
// $ -> Fin de la cadena

const telefono = "+584121032843";

console.log(regex4.test(telefono));

import libros from "./utils/constants.js";

console.log(libros)




