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

cada personaje tiene una imagen, nombre, un estatus y una especie.

*/

const URL_API = "https://rickandmortyapi.com/api/character";

async function obtenerPersonajes(url = URL_API, parametros = "") {
  try {
    const response = await fetch(url.includes("?") ? `${url}&${parametros}` : `${url}?${parametros}`);
    const data = await response.json();
    // const pokemon = await obtenerPokemon(data.results[0].url)
    return data;
  } catch (error) {
    console.error(error);
  }
}

const pintarPersonajes = (personajes) => {
  const containerPersonajes = document.getElementById("personajes");
  while(containerPersonajes.firstChild) {
    containerPersonajes.removeChild(containerPersonajes.firstChild);
  }
  personajes.map((personaje) => {
    const personajeContainer = document.createElement("div");
    personajeContainer.classList.add("rounded-lg","p-2", "bg-slate-600", "text-white", "flex", "flex-col", "gap-2",);
    personajeContainer.innerHTML = 
    `
      <img class="rounded-lg border-2 w-64 h-64 text-center" src="${personaje.image}" alt="${personaje.name}">
      <div>
        <p>Nombre: ${personaje.name}</p>
        <p>Estado: ${personaje.status}</p>
        <p>Especie: ${personaje.species}</p>
      </div>
    `;
    containerPersonajes.appendChild(personajeContainer);
  })
}

const pintarBotones = (info, parametro) => {
  const anterior = document.getElementsByClassName("anterior");
  const siguiente = document.getElementsByClassName("siguiente");
  const paginacion = document.getElementsByClassName("paginacion");
  for (let i = 0; i < anterior.length; i++) {
    anterior[i].disabled = !info.prev;
    anterior[i].onclick = () => {
      main(parametro, info.prev);
    }
    siguiente[i].disabled = !info.next;
    siguiente[i].onclick = () => {
      main(parametro, info.next);
    }
    paginacion[i].innerText = `Total de paginas: ${info.pages}`;
  }
}

const pintarPaginacion = (info, parametro) => {
  // Logica para pintar los numeros que estan en medio de los botones, 
  // de modo tal, que si estoy en la pagina 1, se pinte
  // << 1 2 3 4 >>
  // si estoy en la pagina 2, se pinte
  // << 1 2 3 4 5 >>
  // si estoy en la pagina 5, se pinte
  // << 2 3 4 5 6 7 8 >>
  // La idea es ver : Boton de ir a principio, tres hacia atras (si tengo), pagina actual, tres hacia adelante (si tengo), Boton de ir a final
  const primero = document.getElementById("primero");
  const ultimo = document.getElementById("ultimo");
  const botones = document.getElementById("botones");
  while(botones.firstChild) {
    botones.removeChild(botones.firstChild);
  }

  primero.onclick = () => {
    main(parametro, URL_API);
  }
  ultimo.onclick = () => {
    // console.log(`${URL_API}?page=${info.pages}`)
    main(parametro, `${URL_API}?page=${info.pages}`);
  }
  
  let paginaSiguiente = info.next;
  let paginaAnterior = info.prev;
  if(paginaAnterior == null){
    // Estoy en la pagina 1
    paginaAnterior = 0;
  }else{
    // Extraer informacion de "?page=" del url
    paginaAnterior = parseInt(paginaAnterior.split("?page=")[1]);
  }
  
  if(paginaSiguiente == null){
    // Estoy en la ultima pagina, info.pages 
    paginaSiguiente = info.pages+1;
  }else{
    paginaSiguiente = parseInt(paginaSiguiente.split("?page=")[1]);
  }

  const paginaActual = paginaAnterior +1;
  let auxiliar = 0;
  for(let i = paginaActual; i > 1; i--){
    const botonPagina = document.createElement("button");
    botonPagina.classList.add("bg-slate-600", "text-white", "p-2", "rounded-lg", "cursor-pointer");
    botonPagina.innerText = i-1;
    botonPagina.onclick = () => {
      main(parametro, `${URL_API}?page=${i-1}`);
    }
    if(auxiliar == 0){
      botones.appendChild(botonPagina);
    } else{
      botones.insertBefore(botonPagina, botones.firstChild);
    }
    botones.add
    auxiliar++;
    if(auxiliar == 3){
      break;
    }
  }
  // console.log("auxiliar: ",auxiliar);
  // Invertimos los botones ultimo y primero
  // if(auxiliar == 2){
  //   const ultimoBoton = botones.lastChild;
  //   const primeroBoton = botones.firstChild;
  //   botones.removeChild(ultimoBoton);
  //   botones.removeChild(primeroBoton);
  //   botones.appendChild(ultimoBoton);
  //   botones.appendChild(primeroBoton);
  // } else if(auxiliar == 3){
  //   const ultimoBoton = botones.lastChild;
  //   const boton2 = botones.childNodes[1];
  //   const primeroBoton = botones.firstChild;
  //   botones.removeChild(ultimoBoton);
  //   botones.removeChild(boton2);
  //   botones.removeChild(primeroBoton);
  //   botones.appendChild(ultimoBoton);
  //   botones.appendChild(boton2);
  //   botones.appendChild(primeroBoton);
  // }

  const botonPaginaActual = document.createElement("button");
  botonPaginaActual.innerText = paginaActual;
  botonPaginaActual.classList.add("bg-slate-800", "text-white", "p-2", "rounded-lg", "cursor-pointer");
  botonPaginaActual.onclick = () => {
    main(parametro, `${URL_API}?page=${paginaActual}`);
  }
  botones.appendChild(botonPaginaActual);

  auxiliar = 0;
  for(let i = paginaActual; i < info.pages; i++){
    const botonPagina = document.createElement("button");
    botonPagina.classList.add("bg-slate-600", "text-white", "p-2", "rounded-lg", "cursor-pointer");
    botonPagina.innerText = i+1;
    botonPagina.onclick = () => {
      main(parametro, `${URL_API}?page=${i+1}`);
    }
    botones.appendChild(botonPagina);
    auxiliar = auxiliar + 1;
    if(auxiliar == 3){
      break;
    }
  }


  // console.log(paginaAnterior, paginaSiguiente);
}

const main = async (parametros = "",url = URL_API) => {
  console.log(url);
  const informacion = await obtenerPersonajes(url, parametros);
  pintarBotones(informacion.info, parametros);
  pintarPaginacion(informacion.info, parametros);
  pintarPersonajes(informacion.results, parametros);
  console.log(informacion);
}

// Para crear un temporizador.
// setTimeout();
//  Recibe, 
// 1. Una funcion
// 2. Tiempo en milisegundos
// Temporizador devuelve un ID de ejecucion


const buscador = document.getElementById("buscador");

let temporizador = 0;

buscador.oninput = (e) => {
  clearTimeout(temporizador);
  temporizador = setTimeout(() => {
    main(`name=${e.target.value}`);
  }, 500);
}

main();