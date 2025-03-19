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

/*

const informacion = {
    "info": {
        "count": 826,
        "pages": 42,
        "next": "https://rickandmortyapi.com/api/character?page=11",
        "prev": "https://rickandmortyapi.com/api/character?page=9"
    },
    "results": [
        {
            "id": 181,
            "name": "Jessica's Friend",
            "status": "Alive",
            "species": "Human",
            "type": "",
            "gender": "Female",
            "origin": {
                "name": "Earth (C-137)",
                "url": "https://rickandmortyapi.com/api/location/1"
            },
            "location": {
                "name": "Earth (Replacement Dimension)",
                "url": "https://rickandmortyapi.com/api/location/20"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/181.jpeg",
            "episode": [
                "https://rickandmortyapi.com/api/episode/1",
                "https://rickandmortyapi.com/api/episode/4",
                "https://rickandmortyapi.com/api/episode/6",
                "https://rickandmortyapi.com/api/episode/11",
                "https://rickandmortyapi.com/api/episode/17",
                "https://rickandmortyapi.com/api/episode/18",
                "https://rickandmortyapi.com/api/episode/25",
                "https://rickandmortyapi.com/api/episode/27"
            ],
            "url": "https://rickandmortyapi.com/api/character/181",
            "created": "2017-12-29T18:47:23.345Z"
        },
        ...
    ]
}

informacion.results[4].name

*/

// Ejercicio 

/*

Una empresa desea realizar una Landing Page para visualizar todos los personas de la serie
Rick and Morty, esta empresa posee una API con esa informacion, la cual el endpoint es:

url = "https://rickandmortyapi.com/api";

Para consultar los personas tenemos este otro endpoint: 

url = "https://rickandmortyapi.com/api/character";

Esa landing page necesita mostrar todos los personajes de la serie, de 20 en 20
Debe tener botones de siguiente y anterior, asi como tambien una paginacion donde se vea
el numero de paginas, la pagina actual y el total de paginas.

Esa pagina necesita tambien un buscador de personajes poor nombre, dicho buscador cada vez que se coloque una letra
debe actualizar la lista de personajes de la pagina actual.

cada personaje tiene un nombre, un estatus 



*/

async function obtenerPersonajes(url = "https://rickandmortyapi.com/api/character?page=1") {
  try {
    const response = await fetch(url);
    // console.log(response);
    const data = await response.json();
    // console.log(data.results);
    console.log(data);
    return data
  } catch (error) {
    console.error(error);
  }
}

obtenerPersonajes();

  
/* LocalStorage */
// Guardar informacion en el navegador del usuario, se puede guardar informacion en formato texto
// Persisten en el navegador del usuario

// localStorage.setItem("clave", "valor");
// localStorage.getItem("clave");
// localStorage.removeItem("clave");
// localStorage.clear();

// Ejemplo

const setLocal = (clave, valor) => localStorage.setItem(clave, valor);
const getLocal = (clave) => localStorage.getItem(clave);

setLocal("carrito", "[1, 2, 3]");
console.log(getLocal("carrito"));


/* SessionStorage */
// Muy similar a localStorage pero no persiste en el navegador indefinidamente,
// Se destruye cuando el navegador se cierra

// sessionStorage.setItem("clave", "valor");
// sessionStorage.getItem("clave");
// sessionStorage.removeItem("clave");  
// sessionStorage.clear();

// Ejemplo

const setSession = (clave, valor) => sessionStorage.setItem(clave, valor);
const getSession = (clave) => sessionStorage.getItem(clave);

setSession("carrito", "[1, 2, 3]");
console.log(getSession("carrito"));

/* Cookies */
// Otra forma de guardar informacion en el navegador del usuario
// Principalmente utilizadas para identificar al usuario
// Se guardan en formato:
// document.cookie("nombre=valor; expires=fecha; path=directorio");

//Ejemplo de una cookie que se elimina en 1 día
let fechaActual = new Date();
let fechaExpiracion = new Date(fechaActual.getTime() + 4 * 24 * 60 * 60 * 1000);
document.cookie = `name=Hola; expires=${fechaExpiracion.toUTCString()}; path=/`;

console.log(document.cookie);













