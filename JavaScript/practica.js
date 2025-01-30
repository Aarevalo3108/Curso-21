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

function ejercicio9(parametro){
  let mayor = parametro[0];
  let menor = parametro[0];
  for (let i = 1; i < parametro.length; i++) {
    if(mayor.length < parametro[i].length){
      mayor = parametro[i];
    }
    if(menor.length > parametro[i].length){
      menor = parametro[i];
    }
  }
  console.log(mayor, "y", menor);
}

let lista = ["fresa","uva","manzana"];

// console.log(lista[0]) // fresa
// console.log(lista[1]) // uva
// console.log(lista[2]) // manzana

console.log("Arreglo original: ", lista);

ejercicio9(lista);

/*
  Ejercicios 10:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola el numero mayor del arreglo, 
  si hay dos numeros iguales, que se imprima cualquiera junto con su posicion
  ejemplo: [1,2,3,4,5] -> [5, 4] || [20,45,22,45] -> [45, 1]
*/

// function ejercicio10(parametro){
//   let NumMayor = parametro[0];
//   let position = 0;
//   for(let i = 1; i < parametro.length; i++){
//       if(NumMayor < parametro[i]){
//           NumMayor = parametro[i];
//           position = i;
//       }
//   }
//   console.log("En este arreglo", parametro, "el numero Mayor y su posicion es:", [NumMayor, position]);
// }

// let list1 = [1, 2, 3, 4, 5];
// let list2 = [20, 45, 22, 45];

// ejercicio10(list1);
// ejercicio10(list2);

function ejercicio10(arreglo){
  let mayor = arreglo[0];
  let indice = 0;
  for (let i = 1; i < arreglo.length; i++) {
    if(mayor < arreglo[i]){
      mayor = arreglo[i];
      indice = i;
    }
  }

  let resultado = [mayor, indice];

  return resultado;
}

let ejercicio10Arreglo = [15,54,54,45,5];
console.log("Arreglo original: ", ejercicio10Arreglo);
let resultado = ejercicio10(ejercicio10Arreglo);

console.log(resultado);

/*
  Ejercicios 11:
  Crear una funcion que reciba como parametro un arreglo de numeros
  e imprima en consola el numero menor del arreglo, 
  si hay dos numeros iguales, que se imprima cualquiera junto con su posicion
  ejemplo: [1,2,3,4,5] -> [1, 0] || [25,48,22,22] -> [22, [2,3]] o [22, 2]
*/


function ejercicio11(arreglo){
  let menor = arreglo[0];
  let indice = 0;
  for (let i = 1; i < arreglo.length; i++) {
    if(menor > arreglo[i]){
      menor = arreglo[i];
      indice = i;
    }
  }

  let resultado = [menor, indice];

  return resultado;
}

let ejercicio11Arreglo = [15,54,54,4,500];
console.log("Arreglo original: ", ejercicio11Arreglo);
let resultado11 = ejercicio11(ejercicio11Arreglo);

console.log(resultado11);


/*
  Ejercicios 12:
  Crear una funcion que reciba como parametro un arreglo de arreglos
  e imprima en consola todos los elementos del arreglo de arreglos
  ejemplo: [[1,2,3],[4,5,6],[7,8,9]] -> [1,2,3,4,5,6,7,8,9]
  Pista: usar un for anidado (for dentro de for)
*/

// let ListCompl = []
//     for(let i = 0; i < parametro.length; i++){
//         for(let h = 0; h < parametro[i].length; h++){
//             ListCompl.push(parametro[i][h]);
//         }
//     }
//     console.log("De este arreglo de arreglos", parametro, "se unen en un solo arreglo asi:", ListCompl)
// }
// let listlist = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
// ejercicio12(listlist)

function ejercicio12(arreglo){
  let auxiliar = [];
  for (let i = 0; i < arreglo.length; i++) {
    for(let j = 0; j < arreglo[i].length; j++){
      auxiliar.push(arreglo[i][j]);
    }
  }
  return auxiliar;
}

let ejercicio12Arreglo = [[1,2,3,4,5,3],[4,6],[7,4,234,8,9]];
console.log("Arreglo original: ", ejercicio12Arreglo);
let resultado12 = ejercicio12(ejercicio12Arreglo);

console.log(resultado12);



/*
  Ejercicios 13:
  Crear una funcion que reciba como parametro un 
  arreglo de frutas
  e imprima el nombre de la fruta mas larga, 
  con la letras en posicion par en mayusculas y 
  con la letras en posicion impar en minusculas
  ejemplo: ["uva","fresa","manzana"] -> "MaNzAnA"
*/

function ejercicio13(arreglo){
  let mayor = arreglo[0];
  for(let i = 1; i < arreglo.length; i++){
    if(mayor.length < arreglo[i].length){
      mayor = arreglo[i];
    }
  }
  let texto = "";
  // console.log(mayor);
  for(let i = 0; i < mayor.length; i++){
    if(i % 2 == 0){
      texto += mayor[i].toUpperCase();
    }else{
      texto += mayor[i].toLowerCase();
    }
  }
  return texto;
}

let ejercicio13Arreglo = ["uva","fresa","manzana"];
console.log("Arreglo original: ", ejercicio13Arreglo);
let resultado13 = ejercicio13(ejercicio13Arreglo);

console.log("Resltado: ",resultado13);




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
