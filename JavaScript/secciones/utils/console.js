// import libros from "./constants.js";
// import regex from "./regex.js";

console.log(libros)
console.log(regex)

function enviarInformacion() {
  console.log("enviando informacion");
  let bandera = true;
  const name = document.getElementById("name").value;
  document.getElementById("messageName").innerText = "";
  if(!regex.nombre.test(name)) {
    document.getElementById("messageName").innerText = "El nombre no es valido";
    bandera = false;
  }
  const lastname = document.getElementById("lastname").value;
  document.getElementById("messageLastname").innerText = "";
  if(!regex.nombre.test(lastname)) {
    document.getElementById("messageLastname").innerText = "El apellido no es valido";
    bandera = false;
  }
  const password = document.getElementById("password").value;
  document.getElementById("messagePassword").innerText = "";
  if(!regex.password.test(password)) {
    document.getElementById("messagePassword").innerText = "La contraseña no es valida";
    bandera = false;
  }
  const confirmPassword = document.getElementById("confirmpassword").value;
  document.getElementById("messageConfirmPassword").innerText = "";
  if(password !== confirmPassword) {
    document.getElementById("messageConfirmPassword").innerText = "Las contraseñas no coinciden";
    bandera = false;
  }
  const email = document.getElementById("email").value;
  document.getElementById("messageEmail").innerText = "";
  if(!regex.correo.test(email)) {
    document.getElementById("messageEmail").innerText = "El correo no es valido";
    bandera = false;
  }
  const phone = document.getElementById("phone").value;
  document.getElementById("messagePhone").innerText = "";
  if(!regex.telefono.test(phone)) {
    document.getElementById("messagePhone").innerText = "El telefono no es valido";
    bandera = false;
  }
  if(bandera) {
    console.log("El formulario es valido");
    console.log("Estructura formulario: ", {
      name,
      lastname,
      email,
      phone,
      password
    })
  }
}

// const form = document.getElementById("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   enviarInformacion();
// })

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