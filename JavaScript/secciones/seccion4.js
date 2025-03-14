// Para autenticar:
// Comprobartoken()

// Try - Catch: *** Manejo de errores de codigo en JS ***
// Imagina que estas desarrollando 
// una aplicacion web y te encuentras con un error inesperado
// Similar al if pero:
// * Mi condicion es un error
// * Necesito el catch para manejar el error

// if, else if y else
// try, catch y finally
try {
  // console.log("logramos transformar una constante""); <- este error de SyntaxError no se puede capturar con un try-catch
  const euler = Math.E;
  euler = 2;
  console.log("logramos transformar una constante");
  console.log(euler);
  throw new Error("logramos transformar una constante");
} catch (error) {
  console.log(error);
} finally {
  console.log("Esto siempre se ejecutara");
}
// console.log("Esto sigue ejecutandose");
const frutas = ["Manzana", "Pera", "Sandia", "Durazno", "Tamarindo"];
// console.log(frutas);

// Funciones asincronas
// Son funciones que no se ejecutan en el mismo orden que se llaman, 
// Estas funciones se ejecutan en paralelo a la linea de ejecucion del programa

// setTimeout() -> ***Funcion temporizador***
// Recibe 2 parametros (y uno opcional)
// * Una funcion -> Se ejecuta al finalizar el tiempo
// * Tiempo en milisegundos -> Cuantos milisegundos deben transcurrir para ejecutarse la funcion
// * Argumentos -> Argumentos que se le pasan a la funcion
// Ejemplo

let saludo = "Hola Mundo";
function mensaje(){
  console.log("Esto se ejecutara despues de 3 segundos");
}

setTimeout(mensaje, 3000);

console.log("Esto sigue ejecutandose");

// Estructura setTimeout(funcion, tiempo, argumentos) <- argumentos! 
// solo si la funcion recibe argumentos.

// La funcion setTimeout devuelve un ID de ejecucion
// Este ID se utiliza para cancelar la ejecucion de la funcion
// Ejemplo
const id = setTimeout(mensaje, 3000, saludo);
clearTimeout(id);
// console.log("Esto se ejecutara antes de 3 segundos");


// Ejemplo de seetTimeout con un ciclo for y la generacion de elementos p en el DOM

// console.log("Inicio del ciclo for");
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     // const parrafo = document.createElement("p");
//     // parrafo.innerText = `Parrafo ${i+1}`;
//     // document.body.appendChild(parrafo);
//     console.log(`Parrafo ${i+1}`);
//   }, i * 1000);
// }
// console.log("Esto sigue ejecutandose");


// setInterval -> *** Funcion Intervalo ***
// Estructura setInterval(funcion, tiempo, argumentos) <- argumentos!
// Recibe 2 parametros (y uno opcional)
// * Una funcion -> Se ejecuta en intervalos regulares
// * Tiempo en milisegundos -> Cuantos milisegundos deben transcurrir para ejecutarse la funcion
// * Argumentos -> Argumentos que se le pasan a la funcion
// Ejemplo

let i = 0;
// const intervalo = setInterval(() => {
//   if(i == 30){
//     // Actualizo mi pagina
//     clearInterval(intervalo);
//     // window.location.reload();
//   }
//   const parrafo = document.createElement("p");
//   parrafo.innerText = `Parrafo ${i++}`;
//   document.body.appendChild(parrafo);
// }, 1000);

// Asincronismo en JavaScript
// El asincronismo es la capacidad de realizar tareas en paralelo
// Sin bloquear la ejecucion del programa. 
// Esto permite mejorar la performance y la eficiencia del codigo.

// Callbacks
// Son funciones que se pasan como argumentos a otras funciones
// y se ejecutan cuando una tarea se completa o se produce un evento

// Promesas:
// Son objetos que representan el resultado de una operacion asincrona.
// Estas promesas pueden ser resueltas, rechazadas o pendientes.
// Son usadas para manejar la asincronia en JavaScript.
// El consumo de servicios web y la comunicacion con APIs son ejemplos de uso de promesas.


// Ejemplo

const promesa = new Promise((resolve, reject) => {
  try{
    const informacion = "Informacion de una API...";
    // informacion = "Provocando un error";
    // throw new Error("Provocando un error");

    // El setTimeout simula una operacion asincrona, 
    // como la consulta a una base de datos
    setTimeout(() => {
      // -> Simulamos que Tardo un tiempo y la promesa se resolvio
      resolve(informacion); 
    }, 2000);
  } catch(error){
    // -> Si la promesa no se resuelve, la rechazamos con un error
    reject(error);
  }
});

// console.log(promesa);
// Trabajar con una promesa
// promesa.then((resultado) => {
//   console.log("Promesa resuelta: " + resultado);
// }).catch((error) => {
//   console.error("Promesa rechazada: " + error);
// });


// Async/Await
// Son una sintaxis de JavaScript que permite 
// trabajar con promesas de manera mas sencilla y facil de leer.

// Ejemplo

async function obtenerInformacion() {
  try {
    const informacion = await promesa;
    console.log(informacion);
    // document.getElementById("resultado").innerText = informacion;
    return informacion;
  } catch (error) {
    console.error("Error al obtener informacion: " + error);
  }
}
console.log(obtenerInformacion());
// ¿Como sacamos ese dato de la funcion obtenerInformacion? 
// Dado a que es una promesa, vemos en consola Promise {<pending>}

// Consumo de APIs

const url = "https://rickandmortyapi.com/api/character?page=10";

async function obtenerPersonajes() {
  try {
    const response = await fetch(url);
    // console.log(response);
    const data = await response.json();
    // console.log(data.results);
    const containerPersonajes = document.getElementById("personajes");
    data.results.map((personaje) => {
      const personajeContainer = document.createElement("div");
      personajeContainer.classList.add("p-2", "bg-slate-600", "text-white", "flex", "flex-col", "gap-2");
      personajeContainer.innerHTML = 
      `
        <img src="${personaje.image}" alt="${personaje.name}">
        <p>${personaje.name}</p>
        <p>${personaje.status}</p>
      `;
      containerPersonajes.appendChild(personajeContainer);
    })
  } catch (error) {
    console.error(error);
  }
}
const boton = document.getElementById("boton");
boton.addEventListener("click", obtenerPersonajes);









