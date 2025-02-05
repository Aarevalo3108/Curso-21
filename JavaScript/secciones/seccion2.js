// Funciones

function sumar() {
  let a = 10;
  let b = 25;
  let suma = a + b;
  // total = resultadoResta + a + suma;

  // console.log(total);

  console.log("La suma de 10 + 25 = ", suma);
  return suma
}
console.log(a,b);

let resultado = sumar();

console.log(resultado);


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
  console.log(sumar())
  return resta
}
//  Funcion ordinaria se ejecuta asi -> funcion();
//  Funcion con parametros se ejecuta asi -> funcion(parametro1, parametro2);
var resultadoResta = restaFuncion("diez", 5);

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
console.log(factorial(500));

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
// El ciclo For tiene una condicion en tres partes:
//  - Inicializacion
//  - Condicion
//  - Actualizacion
// Cada ciclo que ocurre se llama iteracion y 
// cada iteracion comprueba la condicion para saber si debe terminar o no

// Actualizacion: Se incrementa o decrementa la variable de control
// i++;
// i = i + 1;
// i += 1;
// Son lo mismo

console.log("Inicio del ciclo for");
for (let i = 0; i < 10; i++) {
  console.log(i);
}console.log("Fin del ciclo for");


// Como mostrar los elementos de un arreglo
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

// While: Un For mas sencillo
// let i = 0; // Coondicion inicial
while(i < 20){ // Condicion de repeticion
  console.log(i);
  i++; // Actualizacion 
}


// Con interrupcion
// let i = 0;
let flag = false;
while(true){
  console.log(i);
  i++;
  if(i == 10){
    flag = true;
    break;
  }
}


// Do-while: Un For mas sencillo
let i = 0; // Coondicion inicial
do{
  console.log("Hola Mundo ",i);
  i++; // Actualizacion 
}while(i < 20);



// Equivalencia del do while con el While:
let j = 0;
console.log(j);
j++;
while(j < 20){
  console.log(j);
  j++;
}


// Objetos: Que son?
// son colecciones de clase clave-valor
// Ejemplo:

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  fabricacion: {
    fecha: 2020,
    pais: "Japon"
  },
  color: "Negro",
  precio: 2000,
  estado: true,
  conducir: function(){
    console.log("Conduciendo");
  }
};
console.log(carro); // En HTML se ve como [object Object]
console.log(carro.marca); // llamar a una propiedad
console.log(carro["marca"]);
console.log(carro.precio); // 2000
console.log(carro["precio"]);
carro.conducir(); // Llamar a un metodo

console.log(carro.fabricacion.pais);

// Modificar una propiedad

carro.color = "Azul";
console.log(carro);

carro.persona = "Angel Arevalo";
console.log(carro);

let clave = 'tipo'; // dos puertas, cuatro puertas
// forma incorrecta: 
// carro.clave = "Cuatro puertas"; <- se guardaria dentro del objeto la clave "clave"
// forma correcta: 
carro[clave] = "Cuatro puertas";// <- se guardaria dentro del objeto la clave "tipo"

console.log(carro);

// Elimar una propiedad
delete carro.fabricacion.pais;

delete carro; // Nota: delete solo elimina la propiedad y no el objeto

console.log(carro);

// For in: para trabajar con objetos
// For of: para trabajar con arrays
const persona = {
  nombre: "Luis",
  apellido: "Perez",
  edad: 20,
  pais: "Mexico",
  ciudad: "Monterrey",
}

for (const propiedad in persona) {
  console.log(propiedad, persona[propiedad]);
}

// Ejemplo:
let texto = "";
for (const propiedad in persona) {
  texto += persona[propiedad] + " ";
}
console.log(texto);

const array = ["Manzana", "Pera", "Sandia", "Durazno", "Tamarindo"];
console.log(array);

for (let fruta of array) {
  fruta = `${fruta} es una fruta`;
  // No modificamos la lista, 
  // solo la recorremos con una variable auxiliar
  // en este caso "fruta"
}

console.log(array);

// Ejercicio:
// Mostrar el inventario del mercado 
const inventario_mercado = [
  {
    categoria: "Frutas",
    subcategorias: [
      {
        tipo: "Manzanas",
        marcas: [
          {
            nombre: "Apple Farms",
            origen: "EE.UU.",
            productos: [
              {
                nombre: "Manzana Gala",
                precio: 1.2,
                cantidad: 30,
                proveedor: {
                  nombre: "Fresh Import",
                  ubicacion: "California, EE.UU.",
                  contacto: "import_fresh@example.com"
                },
                condiciones: {
                  temperatura: "4°C",
                  humedad: "90%"
                },
                fechaIngreso: "2023-09-10",
                vidaUtilDias: 20,
                certificaciones: ["Orgánico", "Libre de pesticidas"],
                embalaje: "Caja de cartón con separadores"
              },
              {
                nombre: "Manzana Fuji",
                precio: 1.5,
                cantidad: 25,
                proveedor: {
                  nombre: "Fresh Import",
                  ubicacion: "California, EE.UU.",
                  contacto: "import_fresh@example.com"
                },
                condiciones: {
                  temperatura: "4°C",
                  humedad: "85%"
                },
                fechaIngreso: "2023-09-15",
                vidaUtilDias: 25,
                certificaciones: ["Orgánico", "GMO-Free"],
                embalaje: "Empaque biodegradable"
              }
            ]
          },
          {
            nombre: "EcoFruit",
            origen: "Chile",
            productos: [
              {
                nombre: "Manzana Verde",
                precio: 1.3,
                cantidad: 40,
                proveedor: {
                  nombre: "Green Supply",
                  ubicacion: "Santiago, Chile",
                  contacto: "greensupply@example.cl"
                },
                condiciones: {
                  temperatura: "3°C",
                  humedad: "80%"
                },
                fechaIngreso: "2023-09-08",
                vidaUtilDias: 30,
                certificaciones: ["Fair Trade", "Orgánico"],
                embalaje: "Bolsa de papel reciclado"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    categoria: "Carnes",
    subcategorias: [
      {
        tipo: "Aves",
        marcas: [
          {
            nombre: "FreeRange Poultry",
            origen: "Brasil",
            productos: [
              {
                nombre: "Pollo Entero",
                precio: 4.5,
                cantidad: 50,
                proveedor: {
                  nombre: "Granjas Unidas",
                  ubicacion: "São Paulo, Brasil",
                  contacto: "granjas_unidas@example.com"
                },
                condiciones: {
                  temperatura: "-2°C",
                  embalaje: "Empaque al vacío",
                  fechaCaducidad: "2023-10-05"
                },
                fechaIngreso: "2023-09-10",
                vidaUtilDias: 45,
                pesoPromedio: "1.2 kg",
                certificaciones: ["Libre de hormonas", "Bienestar animal"]
              }
            ]
          }
        ]
      },
      {
        tipo: "Res",
        marcas: [
          {
            nombre: "Bovino Premium",
            origen: "Argentina",
            productos: [
              {
                nombre: "Corte de Res Angus",
                precio: 10.0,
                cantidad: 20,
                proveedor: {
                  nombre: "Exportadora Bovino",
                  ubicacion: "Buenos Aires, Argentina",
                  contacto: "exportadora_bovino@example.com"
                },
                condiciones: {
                  temperatura: "-3°C",
                  embalaje: "Empaque al vacío"
                },
                fechaIngreso: "2023-09-12",
                vidaUtilDias: 30,
                pesoPromedio: "0.8 kg",
                certificaciones: ["GMO-Free", "Alta calidad"]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    categoria: "Lácteos",
    subcategorias: [
      {
        tipo: "Leche",
        marcas: [
          {
            nombre: "Lácteos del Valle",
            origen: "México",
            productos: [
              {
                nombre: "Leche Entera",
                precio: 2.0,
                cantidad: 100,
                proveedor: {
                  nombre: "Distribuidora Valle",
                  ubicacion: "Ciudad de México, México",
                  contacto: "distribuidora_valle@example.com"
                },
                condiciones: {
                  temperatura: "4°C",
                  embalaje: "Envase de cartón reciclable"
                },
                fechaIngreso: "2023-09-18",
                vidaUtilDias: 10,
                tipo: "Entera",
                certificaciones: ["Certificado orgánico"]
              }
            ]
          }
        ]
      },
      {
        tipo: "Quesos",
        marcas: [
          {
            nombre: "Quesería Tradicional",
            origen: "Francia",
            productos: [
              {
                nombre: "Queso Brie",
                precio: 8.5,
                cantidad: 15,
                proveedor: {
                  nombre: "Quesería Tradicional",
                  ubicacion: "París, Francia",
                  contacto: "queso_france@example.fr"
                },
                condiciones: {
                  temperatura: "5°C",
                  humedad: "75%"
                },
                fechaIngreso: "2023-09-20",
                vidaUtilDias: 60,
                origenLeche: "Vaca",
                certificaciones: ["Appellation d'origine contrôlée (AOC)"],
                embalaje: "Caja de madera"
              },
              {
                nombre: "Queso Roquefort",
                precio: 12.0,
                cantidad: 10,
                proveedor: {
                  nombre: "Quesería Tradicional",
                  ubicacion: "París, Francia",
                  contacto: "queso_france@example.fr"
                },
                condiciones: {
                  temperatura: "6°C",
                  humedad: "80%"
                },
                fechaIngreso: "2023-09-21",
                vidaUtilDias: 90,
                origenLeche: "Oveja",
                certificaciones: ["Appellation d'origine contrôlée (AOC)"],
                embalaje: "Empaque de cera ecológica"
              }
            ]
          }
        ]
      }
    ]
  }
];

// Ejercicio 2:
// Mostrar todos los elementos del objeto a continuacion:
const personas = [
  { // [0]
    nombre: "Juan",
    apellido: "Perez",
    edad: 25, // personas[0].edad
    hobbies: ["correr","saltar","dormir"],
    direccion: {
      calle: "calle 1",
      numero: 1,
      barrio: "Barrio 1"
    },
    saludar: function(){
      console.log(`Te saluda ${this.nombre} desde un objeto`);
    }
  },
  { // [1]
    nombre: "Maria",
    apellido: "Salome",
    edad: 25,
    hobbies: ["correr","saltar","dormir"], // personas[1].hobbies[1]
    direccion: {
      calle: "calle 1",
      numero: 1,
      barrio: "Barrio 1" // personas[1].direccion.barrio o personas[1]['direccion']['barrio']
    },
    saludar: function(){
      console.log(`Te saluda ${this.nombre} desde un objeto`);
    }
  },
  { //[2]
    nombre: "Manuel",
    apellido: "Hernandez",
    edad: 25,
    hobbies: ["correr","saltar","dormir"],
    ropa: ["camisa","pantalon"],
    direccion: {
      calle: "calle 1",
      numero: 1,
      barrio: "Barrio 1"
    },
    saludar: function(){
      console.log(`Te saluda ${this.nombre} desde un objeto`);
    }
    // elemento: undefined
  }
]

// Mostrar cada propiedad y cada elemento de cada arreglo y objeto del objeto personas
// Se puede utilizar for of y for in o se pueden utilizar ciclos for normales
// let Texto


// console.log(personas[0]);
// console.log(personas[1]);
// console.log(personas[2]);


for( const persona of personas){
  for(const propiedad in persona){
    // if(propiedad == "hobbies"){
    //   let hobbies = persona["hobbies"];
    //   for(const hobby of hobbies){
    //     console.log(hobby);
    //   }
    // }
    if(Array.isArray(persona[propiedad])){
      let array = persona[propiedad];
      for(const elemento of array){
        console.log(elemento);
      }
    }
    else if (propiedad == "direccion"){
      let direccion = persona["direccion"];
      // for(const caracteristica in persona[propiedad]){
      //   console.log(persona[propiedad][caracteristica]);
      // }
      for(const caracteristica in direccion){
        console.log(direccion[caracteristica]);
      }
    }
    else if (propiedad == "saludar"){
      persona.saludar();
    }else{
      console.log(persona[propiedad]);
    }
    // Operador ternario
    (Array.isArray(persona[propiedad])) ? console.log(persona[propiedad]) : propiedad === "direccion" ? console.log(persona["direccion"]) : console.log(persona[propiedad]);
  }
  console.log(" ");
}



console.log(personas[0].hobbies);
console.log(personas[0].hobbies[0]);
console.log(personas[0].hobbies[1]);
console.log(personas[0].hobbies[2]);
console.log(personas[1].hobbies[0]);
console.log(personas[1].hobbies[1]);
console.log(personas[1].hobbies[2]);
console.log(personas[2].hobbies[0]);
console.log(personas[2].hobbies[1]);
console.log(personas[2].hobbies[2]);

console.log(`${personas[0]} dice ${personas[0].saludar()}`);
console.log(`${personas[1]} dice ${personas[1].saludar()}`);
console.log(`${personas[2]} dice ${personas[2].saludar()}`);


// Saber si una propiedad es un arreglo
console.log(Array.isArray(persona[propiedad])); // true si es un arreglo

// Saber si una propiedad es un objeto
console.log(typeof persona[propiedad] === "object"); // true si es un objeto

// Funciones constructoras

function Persona(nombre, apellido, edad){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.saludar = function(){
    console.log(`Te saluda ${this.nombre} desde una funcion constructora`);
  }
}

let persona1 = new Persona("Juan", "Perez", 25);
let persona2 = new Persona("Maria", "Salome", 25);
let persona3 = new Persona("Manuel", "Hernandez", 25);

let personas_ordenadas = [persona1, persona2, persona3];

console.log(personas_ordenadas);


// Clases: funciones constructoras, tiene que ver mucho con programacion orientada a objetos

class Producto{
  constructor(valor1, valor2){
    this.nombre = valor1;
    this.precio = valor2;
    this.calculoIVA = function(){
      return this.precio * 0.16;
    }
  }
}

let producto1 = new Producto("Camisa", 1000);
let producto2 = new Producto("Pantalon", 2000);
let producto3 = new Producto("Zapatos", 3000);

let productos = [producto1, producto2, producto3];

// console.log(producto1, producto2, producto3);

for(const producto of productos){
  console.log(`El IVA de ${producto.nombre} es ${producto.calculoIVA()}`);
}


/*
  Ejercicios de Seccion 2:

  1. Crea el juego de tres en raya. (Tablero de tres en raya, Utilizar arrays y ciclos for)
  
  Opcional:
  2. Crea un To Do List. (To Do List, Utilizar objetos y ciclos for)
  
  Nota: Para ambos ejercicios debes tener en cuenta crear una pagina web para visualizarlos (HTML,CSS)
  La pagina debe publicarse en Github Pages.

  Para estos ejercicios es necesario trabajar con los metodos 
  .appendChild() y .removeChild() (To Do List) de DOM.

  Fecha de entrega: 03/02/2025
*/


