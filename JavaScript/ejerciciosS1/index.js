/*

  Ejercios de calculadora en JS (Seccion1)

 1. Crear una calculadora funcional con HTML, CSS y JS.
 La calculadora debe tener botones para los numeros del 0 al 9.
 Botones de sumar, restar, multiplicar y dividir.
 Botones de parentesis y de borrar.
 Debe tener un boton para resolver la operacion ("="). <- eval()
 Debe poder trabajar con numeros decimales.

 Opcional:
 - Debe sacar porcentajes tambien.
 - Debe poder limpiar la pantalla.
 - El estilo visual de la calculadora debe parecerse al 
 de una calculadora real.

 2. Crea un personaje (imagen) que se mueva en la 
 dirección que presiones en las teclas direccionales.

 Pista: onkeydown y onkeyup.

 Opcional:
 - La imagen debe cambiar su orientacion dependiendo
 de la direccion. (Arriba, abajo, izquierda, derecha)

 fecha entrega: 20/01/2025.

*/

function agregar(elemento){
  let pantalla = document.getElementById("display");
  pantalla.value = pantalla.value + elemento;
}

function limpiar(){
  let pantalla = document.getElementById("display");
  pantalla.value = "";
}

function resolver(){
  let pantalla = document.getElementById("display");
  pantalla.value = eval(pantalla.value);
}



function mover(e){
  e.preventDefault();
  let personaje = document.getElementById("personaje");
  console.log(e);
  switch(e.key){
    case "ArrowUp":
      if(personaje.offsetTop <= 0){
        break;
      }
      personaje.style.top = personaje.offsetTop - 10 + "px";
      personaje.style.transform = "rotate(270deg)";
      break;
    case "ArrowDown":
      if(personaje.offsetTop >= 500){
        break;
      }
      personaje.style.top = personaje.offsetTop + 10 + "px";
      personaje.style.transform = "rotate(90deg)";
      break;
    case "ArrowLeft":
      if(personaje.offsetLeft <= 0){
        break;
      }
      personaje.style.left = personaje.offsetLeft - 10 + "px";
      personaje.style.transform = "scale(-1,1)";
      break;
    case "ArrowRight":
      if(personaje.offsetLeft >= 500){
        break;
      }
      personaje.style.left = personaje.offsetLeft + 10 + "px";
      personaje.style.transform = "rotate(0deg)";
      break;
  }
}