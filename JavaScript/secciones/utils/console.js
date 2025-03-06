// import libros from "./constants.js";
// import regex from "./regex.js";

console.log(libros)
console.log(regex)

function enviarInformacion(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  if(!regex.nombre.test(name)) {
    alert("El nombre no es valido");
    return;
  }

  const email = document.getElementById("email").value;
  if(!regex.correo.test(email)) {
    alert("El correo no es valido");
    return;
  }

  const phone = document.getElementById("phone").value;
  if(!regex.telefono.test(phone)) {
    alert("El telefono no es valido");
    return;
  }

  console.log(name, email, phone);
}

/*

Crea un formulario de registro con los siguientes campos:

* Nombre
* Apellido
* Email
* Telefono
* Contraseña
* Confirmar contraseña
* Boton de enviar


Valida que todos los campos sean correctos utilizando expresiones regulares.
Los campos no deben estar vacios, cada uno debe tener un formato especifico

Que debe tener la contraseña:
- Al menos una mayuscula
- Al menos una minuscula
- Al menos un numero
- Al menos un caracter especial (sin espacios en blanco)
- Al menos 8 caracteres

Debe tener mensaajes de error dinamico para cada campo
Opcional: Un mensaje dinamico para cada requisito de la contraseña

onchange() para evaluar el input a medida que se escribe contenido
*/