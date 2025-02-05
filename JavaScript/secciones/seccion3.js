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

const lista1 = [];
const lista2 = [];

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

function sumarTradicional(a, b){
  return a + b;
}

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


