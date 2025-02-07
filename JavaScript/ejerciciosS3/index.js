// Ejercicios para practicar ES6, DOM, selectores
// Todo por JS
// 1. En un documento HTML crear una lista de 10 elementos <li> con los numeros del 1 al 10
// 2. Crea un boton y modifica su texto y sus estilos 

// 3. Aplicale estilos a esa lista de elementos del ejercicio 1
// Seria tipo: <li class="Rojo"></li>, <li class="Verde"></li>
// 4. Crea una lista de imagenes (maximo 10) con esta estructura:
// {
//   "id": n1,
//   "title": "n1",
//   "url": "https://picsum.photos/200"
// }, ...
// cada elemento img seria: <img id="id" src="url" alt="title">

const body = document.getElementById("body");
const ul = document.createElement("ul");
ul.id = "lista"

// Importante: {patron de repeticion}
// let li1 = document.createElement("li");
// li1.innerText = "1";
// ul.appendChild(li1);


// Ejercicio 1
// Extra
const numeros = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];

for (let i = 0; i < 10; i++) {
  let li = document.createElement("li");
  li.innerText = numeros[i];
  ul.appendChild(li);
}

body.appendChild(ul);


// Ejercicio 2

const boton = document.createElement("button");
boton.innerText = "0";

// Extra ---------
let contador = 0
boton.onclick = () => {
  contador++;
  boton.innerText = contador
}
// -------------
boton.classList.value = "boton";
body.appendChild(boton);

// Ejercicio 3

const lista = document.querySelector("ul");

const ejemplo = document.querySelectorAll("ul");
console.log(ejemplo);

lista.style.display = "flex";
lista.style.flexDirection = "column";
lista.style.gap = "1rem"


lista.childNodes.forEach(
  (valor,i) => {
    valor.style.borderRadius = "1rem";
    valor.style.padding = `0.5rem 1rem`;
    valor.style.width = `${300/i}px`
    valor.style.textAlign = "center"
    if(i%2 == 0){
      valor.style.backgroundColor = "blue";
      valor.style.color = "orange";
    }else{
      valor.style.backgroundColor = "green";
      valor.style.color = "violet";
    }
  }
)


// Ejercicio 4

for(let i=0;i<10;i++){
  const datos = {
    id: `n${i}`,
    title: `n${i}`,
    src: `https://picsum.photos/${10*i+100}`
  }
  const img = document.createElement('img');
  img.id = datos.id;
  img.alt = datos.title;
  img.src = datos.src;

  body.appendChild(img);
  console.log(datos)
}