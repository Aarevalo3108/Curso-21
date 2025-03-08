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

    while (messages.firstChild) {
      messages.removeChild(messages.firstChild);
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