//  Programacion Orientada a objetos
// Consiste en crear objetos que representen entidades o conceptos del mundo real.
// Estos objetos tienen propiedades y metodos que permiten realizar acciones sobre ellos.

// POO: Clases, Objetos, Metodos
// Lo principal son las clases, 
// que son plantillas para crear objetos.
// Los objetos son instancias de las clases.
// Los metodos son funciones que se ejecutan en los objetos.

// De forma tradicional: creacion de objetos

const Persona1 = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 25
};

console.log(Persona1.nombre);

const Persona2 = {
  nombre: "Maria",
  apellido: "Salome",
  edad: 25
};

console.log(Persona2.nombre);

const Persona3 = {
  nombre: "Manuel",
  apellido: "Hernandez",
  edad: 25
};

Persona3.direccion = {
  calle: "calle 1",
  numero: 1,
  barrio: "Barrio 1"
};

console.log(Persona3.direccion.barrio);
// Hecho con clases

class Persona {
  // La funcion constructor se ejecuta cuando se crea un objeto 
  // y es equivalente a los parametros de una funcion
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.estadoCivil = "Soltero";
  }

  saludar(){
    console.log(`Te saluda ${this.nombre}.`);
  }

  despedirse(){
    console.log(`Adios de parte de ${this.nombre}.`);
  }
}

// Uso de la clases

const persona1 = new Persona("Juan", "Perez", 25);
const persona2 = new Persona("Maria", "Salome", 25);
const persona3 = new Persona("Manuel", "Hernandez", 25);

persona1.saludar();
persona1.despedirse();

persona2.saludar();
persona2.despedirse();

persona3.saludar();
persona3.despedirse();

// Herencia: una clase puede heredar de otra
class Admin extends Persona {
  constructor(nombre, apellido, edad) {
    super(nombre, apellido, edad);
    this.rol = "Admin";
  }

  saludarConPrivilegios(){
    console.log(`Te saluda ${this.rol} ${this.nombre}.`);
  }
}

const admin1 = new Admin("Angel", "Arevalo", 25);
admin1.saludar();
admin1.despedirse();
admin1.saludarConPrivilegios();


// Get the size of an object
const myObj = {id: 1, name: "John", age: 30};
var size = Object.keys(myObj).length;
// console.log(size);