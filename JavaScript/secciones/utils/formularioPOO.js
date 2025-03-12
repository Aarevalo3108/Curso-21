class Formulario {
  constructor(name, lastname, email, phone, password, confirmPassword) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.regex = {
      name: /^[a-zA-Z\s]{1,40}$/,
      email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      phone: /^\+\d{12}$/,
      password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    }
  }
  validar(){
    const messageList = [];
    if(!this.regex.name.test(this.name)) messageList.push("El nombre no es valido");
    if(!this.regex.name.test(this.lastname)) messageList.push("El apellido no es valido");
    if(!this.regex.password.test(this.password)) messageList.push("La contraseña no es valida");
    if(this.password !== this.confirmPassword) messageList.push("Las contraseñas no coinciden");
    if(!this.regex.email.test(this.email)) messageList.push("El email no es valido");
    if(!this.regex.phone.test(this.phone)) messageList.push("El telefono no es valido");
    return messageList
  }

  enviar(){
    const messageList = this.validar();
    if(messageList.length === 0){
      console.log("enviando informacion");
      window.reload();
    } else {
      console.log(messageList);
    }
  }

  visualizarMensajes(id){
    const messageList = this.validar();
    messageList.forEach((message, index) => {
      const messages = document.getElementById(id);
      const messageElement = document.createElement("p");
      messageElement.id = `Error${index}`;
      messageElement.className = "text-red-600 font-bold text-lg";
      messageElement.innerText = message;
      messages.appendChild(messageElement);
    })
  }

  borrarMensajes(id) {
    const messages = document.getElementById(id);
    if (!messages) return;
    try{
      while (messages.firstChild) {
        messages.removeChild(messages.firstChild);
      }
    }catch{
      console.log("No hay mensajes para borrar");
    }
  }
}


function enviarInformacion(id){
  console.log(id);
  const formulario = new Formulario(
    document.getElementById("name").value,
    document.getElementById("lastname").value,
    document.getElementById("email").value,
    document.getElementById("phone").value,
    document.getElementById("password").value,
    document.getElementById("confirmpassword").value
  );
  formulario.enviar();
  formulario.borrarMensajes("messages");
  formulario.visualizarMensajes("messages");
}

const pi = 3.14;
pi = 5;

/*

- Hacer una calculadora (ejercicio secccion 2) pero ahora orientada a Objetos

- Crear una estructura de Usuarios, Administradores y Profesores, dicha estructura deben ser clases donde tenemos
- Persona -> Usuario -> Administrador 
                     -> Profesor

- Cada flecha significa una herencia (Nota: Administrador hereda de Usuario y Profesor hereda de Usuario)

- Una persona tiene:
  - Nombre
  - Apellido
  - Edad
  - Saludar
  - Despedirse

- Un usuario tiene: 
  - Correo
  - Contraseña
  - Rol
  - Iniciar sesion
  - Desloguearse

- Un administrador tiene:
  - Privilegios
  - Saludar con privilegios
  - Administrar()

- Un profesor tiene:
  - Area de trabajo
  - Saludar con privilegios
  - Dar clases

  Fecha de entrega: 10/03/2025

*/

class Persona {
  constructor(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  saludar(){
    console.log(`Te saluda ${this.name} ${this.lastname} y tengo ${this.age} años.`);
  }

  despedirse(){
    console.log(`Adios de parte de ${this.name} ${this.lastname} y tengo ${this.age} años.`);
  }
}

const persona = new Persona("Angel", "Arevalo", 25);
// persona.saludar();
// persona.despedirse();

class Usuario extends Persona {
  constructor(name, lastname, age, email, password) {
    super(name, lastname, age);
    this.email = email;
    this.password = password;
    this.rol = "Usuario";
  }

  iniciarSesion(){
    console.log(` Rol: ${this.rol}. Iniciando sesion con el correo ${this.email} y la contraseña ${this.password}.`);
  }

  desloguearse(){
    console.log(`Rol: ${this.rol}. Deslogueandose del correo ${this.email} y la contraseña ${this.password}.`);
  }
}

const usuario = new Usuario("Angel", "Arevalo", 25, "aKZt8@example.com", "12345678");
// usuario.saludar();
// usuario.despedirse();
// usuario.iniciarSesion();
// usuario.desloguearse();

class Administrador extends Usuario {
  constructor(name, lastname, age, email, password, privileges) {
    super(name, lastname, age, email, password);
    this.rol = "Administrador";
    this.privileges = privileges;
  }

  saludarConPrivilegios(){
    console.log(`Te saluda ${this.rol} ${this.name}.`);
  }

  administrar(){
    console.log(`Administrando ${this.privileges}.`);
  }
}

const admin1 = new Administrador("Angel", "Arevalo", 25, "aKZt8@example.com", "12345678", "Bases de datos");
// admin1.saludar();
// admin1.despedirse();
// admin1.iniciarSesion();
// admin1.desloguearse();
// admin1.saludarConPrivilegios();
// admin1.administrar();

class Profesor extends Usuario {
  constructor(name, lastname, age, email, password, area) {
    super(name, lastname, age, email, password);
    this.rol = "Profesor";
    this.area = area;
  }

  saludarConPrivilegios(){
    console.log(`Te saluda ${this.rol} ${this.name}.`);
  }

  darClases(){
    console.log(`Dando clases de ${this.area}.`);
  }
}

const profesor1 = new Profesor("Angel", "Arevalo", 25, "aKZt8@example.com", "12345678", "Programacion");
profesor1.saludar();
profesor1.despedirse();
profesor1.iniciarSesion();
profesor1.desloguearse();
profesor1.saludarConPrivilegios();
profesor1.darClases();

