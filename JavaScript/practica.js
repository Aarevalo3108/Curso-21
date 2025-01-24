/*
  Ejercicios 7:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola cada elemento del arreglo 
  si el numero es par, que se multiplique por 2
  si el numero es impar, que se multiplique por 3
  ejemplo: [1,2,3,4,5] -> [3,4,9,8,15]
*/

function ejercicio7(arreglo){
  let auxiliar = [];
  for(let i=0;i < arreglo.length; i++){
    if(arreglo[i] % 2 == 0){
      // console.log("Numero par encontrado: ",arreglo[i] * 2);
      // arreglo[i] = arreglo[i] * 2
      auxiliar.push(arreglo[i] * 2);
    } else {
      // console.log("Numero impar encontrado: ",arreglo[i] * 3);
      // arreglo[i] = arreglo[i] * 3
      auxiliar.push(arreglo[i] * 3);
    }
  }
  return auxiliar;
  // return arreglo
}

let ejercicio7Arreglo = [1,2,3,4,5];

console.log("Arreglo original: ", ejercicio7Arreglo);

let arregloModificado = ejercicio7(ejercicio7Arreglo);

console.log("Arreglo modificado: ", arregloModificado);

// console.log("Arreglo original despues de la funcion: ", ejercicio7Arreglo);


/*
  Ejercicios 8:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola la suma de todos los elementos del arreglo 
  junto con la cantidad de elementos.
  ejemplo: [1,2,3,4,5] -> [15, 5]
*/

function ejercicio8(arreglo){
  // console.log("Cantidad: ", arreglo.length);
  let suma = 0;
  for(let i = 0; i < arreglo.length; i++){
    suma = suma + arreglo[i];
  }
  // console.log("Suma: ", suma);
  let auxiliar = [suma, arreglo.length];
  console.log("Suma y cantidad: ", auxiliar);
}

let ejercicio8Arreglo = [1,2,3,4,6,7,8,9,10];

console.log("Arreglo original: ", ejercicio8Arreglo);

ejercicio8(ejercicio8Arreglo);

/*
  Ejercicios 9:
  Crear una funcion que reciba como parametro un arreglo de palabras
  e imprima en la consola la palabra mas larga y la palabra mas corta del arreglo
  ejemplo: ["fresa","uva","manzana"] -> "manzana" y "uva"
*/

/*
  Ejercicios 10:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola el numero mayor del arreglo, 
  si hay dos numeros iguales, que se imprima cualquiera junto con su posicion
  ejemplo: [1,2,3,4,5] -> [5, 4] || [20,45,22,45] -> [45, 1]
*/

/*
  Ejercicios 11:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola el numero menor del arreglo, 
  si hay dos numeros iguales, que se imprima cualquiera junto con su posicion
  ejemplo: [1,2,3,4,5] -> [1, 0] || [25,48,22,22] -> [22, 2]
*/

/*
  Ejercicios 12:
  Crear una funcion que reciba como parametro un arreglo de arreglos
  e imprima en consola todos los elementos del arreglo de arreglos
  ejemplo: [[1,2,3],[4,5,6],[7,8,9]] -> [1,2,3,4,5,6,7,8,9]
*/

/*
  Ejercicios 13:
  Crear una funcion que reciba como parametro un arreglo de frutas
  e imprima el nombre de la fruta mas larga, 
  con la letras en posicion par en mayusculas y con la letras en posicion impar en minusculas
  ejemplo: ["fresa","uva","manzana"] -> "MaNzAnA"
*/

/*

  Ejericio 14:
  Crea una funcion que realice el factorial de un numero utilizando ciclos

*/

/*

  Ejericio 15:
  Crea una funcion que realice la sucecion de fibonacci utilizando ciclos

*/

/*

  Ejericio 16:
  Crea las funciones agregar, eliminar, buscar, actualizar de un arreglo.
  Cada funcion debe recibir como parametro el arreglo y el elemento a agregar, eliminar,
  buscar o actualizar y debe retornar el arreglo modificado. Debes imprimir el arreglo
  modificado en cada funcion para verificar su funcionamiento.

*/
