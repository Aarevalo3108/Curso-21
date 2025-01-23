/*
Ejercicios:
*/
/*
  Nota: Debes crear un boton en HTML para ejecutar cada ejercicio
  (5 botones), cada boton debe permitirle al usuario ingresar un texto y mostrarle al usuario
  el resultado del ejercicio correspondiente.
*/
/*
  Ejercicio 1:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la cadena de texto en mayusculas.
  Ejemplo: "Bienvenido" -> "BIENVENIDO".
*/

function mayusculas(){
  let texto = prompt("Ingresa un texto: ");
  let mayusculas = texto.toUpperCase();
  alert(`El texto "${texto}" en mayusculas es: ${mayusculas}`);
}


/*
  Ejercicio 2:
  Crear una funcion que reciba como parametro una cadena de texto
  e imprima la cadena de texto en minusculas.
  Ejemplo: "BienVenIdO" -> "bienvenido".
*/

function minusculas(){
  let texto = prompt("Ingresa un texto: ");
  let mayusculas = texto.toLowerCase();
  alert(`El texto "${texto}" en minusculas es: ${mayusculas}`);
}

/*
  Ejercicio 3:
  Crear una funcion que reciba un texto e imprima la longitud de la cadena de texto.
  Si la longitud es mayor que 5, que se imprima la cadena recortada.
  Ejemplo: "Angel Arevalo" -> "Angel"
*/

function ejercicio3(){
  let texto = prompt("Ingresa un texto: ");
  let longitud = texto.length;
  let recortado;
  if(longitud > 5){
    recortado = texto.slice(0, 5);
    alert(`El texto "${texto}" tiene una longitud de ${longitud} y se recorto a "${recortado}"`);
  } else {
    recortado = texto;
    alert(`El texto "${texto}" tiene una longitud de ${longitud} y no se recorto`);
  }
}


/*
  Ejercicio 4:
  Crear una funcion que reciba un texto e imprima la primera letra y la ultima.
  Ejemplo: "Cadena de texto" -> "C <-> o"
*/

function ejercicio4(){
  let texto = prompt("Ingresa un texto: ");
  let primero = texto[0];
  let ultimo = texto[texto.length - 1];
  alert(`El texto "${texto}" tiene como primera letra "${primero}" y como ultima letra "${ultimo}"`);
}

/*
  Ejercicio 5:
  Crear una funcion que reciba un texto e imprima la palabra "durazno" si se incluye en el texto
  Ejemplo: "Quiero comer durazno" -> "durazno" ó "no hay durazno" (si no esta la palabra durazno)
*/

function durazno(){
  let texto = prompt("Ingresa un texto: ");
  if(texto.includes("durazno")){
    alert(`El texto "${texto}" contiene la palabra "durazno"`);
  } else {
    alert(`El texto "${texto}" no contiene la palabra "durazno"`);
  }
}
