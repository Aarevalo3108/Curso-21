const regex = {
  name: /^[a-zA-Z\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  enamil: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\+\d{12}$/,
  password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
  age: /^\d{1,3}$/
}

class Formulario{
  constructor(name, lastname, email,phone, password, age){
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.age = age ?? 0;
  }
  validar(){
    const result = {};
    if(!regex.name.test(this.name)){
      result.name = "El nombre no es valido";
    }
    if(!regex.enamil.test(this.email)){
      result.email = "El correo no es valido";
    }
    if(!regex.phone.test(this.phone)){
      result.phone = "El telefono no es valido";
    }
    if(!regex.password.test(this.password)){
      result.password = "La contraseña no es valida";
    }
    if(!regex.age.test(this.age)){
      result.age = "La edad no es valida";
    }
    return result

  }
}

const formulario = new Formulario("Gabriel", "Garcia", "gabriel@hola.com", "+123456781234", "21");
console.log(formulario);
console.log(formulario.validar());


// Get the size of an object
const myObj = {id: 1, name: "John", age: 30};
var size = Object.keys(myObj).length;
console.log(size);