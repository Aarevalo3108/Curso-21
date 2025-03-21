/*
 * Crea un sistema de login y registro de usuarios
 * Este debe de tener las siguientes paginas
 *
 * - Login
 * - Registro
 * - Home
 * - Perfil
 * 
 * Login: Debe de tener un formulario con los campos de usuario y contraseña
 * Registro: Debe de tener un formulario con los campos de usuario, email, contraseña y confirmar contraseña
 * Home: Debe de mostrar un mensaje de bienvenida al usuario logueado
 * Perfil: Debe de mostrar la información del usuario logueado y permitir modificarla
 *
 * Debes utilizar el localStorage para almacenar la información de los usuarios
 * y validar que el usuario y contraseña sean correctos
 * 
 * Una vez que el usuario se loguee, debe de redirigirse a la página de Home y no
 * podrá acceder a las páginas de Login y Registro.
 * 
 * Debes de crear una cookie que permita recordar que el usuario está logueado y debe vencerse
 * pasado unas dos horas
 * 
 * Un usuario que no esté logueado no podrá acceder a las páginas de Home y Perfil
 * 
 * Todos los formularios deben ser validados para no permitir caracteres indeseados
 * 
 * Para editar un usuario puedes crear una página para editar después de ingresar a su perfil
 * 
 * La página debe de ser responsive y tener un diseño agradable
 *
 * Debes de crear documentación profesional para tu proyecto
 * 
 * Debes subir el proyecto a GitHub con un archivo README.md que explique el funcionamiento
 * y una introducción al proyecto
 * Fecha de entrega 25/03/2025

*/


//Obtener una cookie

const cookie = document.cookie

// Buscar la que sea "Sesion"

const sesionCookie = cookie.split(";").find(cookie => cookie.includes("Sesion"))

if(!sesionCookie){
  console.log("No hay sesion");
}