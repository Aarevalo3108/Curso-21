// Ejercicios JavaScript

// Ejercicio 1
// Se trata de un arreglo de N enteros distintos que contiene 
// todos los numeros del 0 al numero N-1, pero falta 1.
// La tarea es encontrar el numero que falta en el arreglo.
//---------------------
// Por ejemplo:
// N = 4
// Input: [0, 1, 3]
// Output: 2
//---------------------
// N = 10
// Input: [0, 4, 6, 3, 1, 5, 2, 7, 9]
// Output: 8
//---------------------
// N = 5
// Input: [0, 2, 1, 3]
// Output: 4

// ----------------- Hector ----------------
function encontrar_faltante (elementos) {
  elementos.sort();
  for (i=0; i < elementos.length; i++){
    if (elementos[i] != i){
      return i;
    }
  }
  return elementos.length
  }

console.log(encontrar_faltante([1, 0, 3, 2, 4]));


  // ## 2. Imprimir un arreglo

  // Escribir una función llamada `imprimirArreglo` 
  // que reciba un arreglo e imprima cada elemento en una línea a parte:
  
  // Ejemplo
  // console.log(imprimirArreglo(1, "Hola", 2, "Mundo"))
  // -> 1
  // -> Hola
  // -> 2
  // -> Mundo

  // ----------------- Brenyer ----------------

// Declaracion: Definir las acciones que va a realizar la funcion
function imprimirArreglo (arreglo) {
  // Logica para imprimir todos los elementos del arreglo
  // Un arreglo maneja sus datos por los valores posicionales
  // Ejemplo: Arreglo_prueba = [0, "Brenyer", 2, "Hector"];
  // Console.log(Arreglo_prueba[0]); -> 0
  // Console.log(Arreglo_prueba[1]); -> "Brenyer"
  // Console.log(Arreglo_prueba[2]); -> 2
  // Console.log(Arreglo_prueba[3]); -> "Hector"

  // Ciclo For: Para recorrer todos los elementos del arreglo
  for (let i = 0; i < arreglo.length; i++){
    console.log(arreglo[i]);
  }

}

// LLamamos a la funcion: Las lineas de codigoo dentro de la funcion se ejecutan
const lista = [1, "Brenyer", 2, "Hector",3, "Glayre"];
imprimirArreglo(lista);


//   3. Número de Likes

// Escribe una función llamada `likes` que reciba un número y 
// retorne un string utilizando el formato de K para miles y M para millones.

// Por ejemplo:

// * 1400 se convierte en 1K
// * 34,567 se convierte en 34K
// * 7’456,345 se convierte en 7M.

// Si el número es menor a 1000 se debe devolver el mismo número como un string.
function likes(likes){
  mostrar = "";
  if (likes < 1000){
    mostrar = likes.toString();
  }else if (likes < 1000000){
    mostrar = (likes / 1000).toFixed(0) + "K";
  } else {
    mostrar = Math.trunc(likes / 1000000) + "M";
  }
  return mostrar;
}
console.log(likes(683));
console.log(likes(1550));
console.log(likes(359580));
console.log(likes(2565000));
console.log(likes(600420000));


// código de prueba
// console.log(likes(983)) -> "983"
// console.log(likes(1900)) -> "1K"
// console.log(likes(54000)) -> "54K"
// console.log(likes(120800)) -> "120K"
// console.log(likes(25222444)) -> "25M"

// ----------------- Hector ----------------



// 4. Sumar arreglo

// Escribir una función llamada `sumarArreglo` que 
// reciba un arreglo de números y retorne la suma de todos los elementos.

// código de prueba
// console.log(sumarArreglo([3, 1, 2])) -> 6
// console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) -> 55
// console.log(sumarArreglo([])) -> 0

function sumarArreglo(arreglo) {
  // return arreglo.reduce((a, b) => a + b, 0); -> Solucion mas eficaz
  let auxiliar = 0;
  for (let i = 0; i < arreglo.length; i++){ // -> Solucion mas visual
    auxiliar = auxiliar + arreglo[i];
  }
  return auxiliar
}

console.log(sumarArreglo([3, 1, 2,10,5]));



// ----------------- Glayre ----------------





// 5. Calcular impuestos

// Escribir una función llamada `calcularImpuestos` 
// que reciba dos argumentos numéricos: `edad` e `ingresos`
// . Si `edad` es igual o mayor a 18 y los ingresos son iguales
//  o mayores a 1000 debe retornar `ingresos` * 40%. De lo contrario retornar 0.

// código de prueba
// console.log(calcularImpuestos(18, 1000)) -> 400
// console.log(calcularImpuestos(40, 10000)) -> 4000
// console.log(calcularImpuestos(17, 5000)) -> 0
// console.log(calcularImpuestos(30, 500)) -> 0
// ----------------- Hector ----------------

const calcularImpuestos = (edad, ingresos) => {
  if (edad >= 18 && ingresos >= 1000){
    impuesto = ingresos * 0.4;
  } else {
    impuesto = 0;
  }
  return impuesto;
}

console.log(calcularImpuestos(18, 1000));
console.log(calcularImpuestos(40, 10000));
console.log(calcularImpuestos(17, 5000));
console.log(calcularImpuestos(30, 500));



// 6. IMC (ïndice de masa corporal)

// El índice de masa corporal (IMC), o BMI por sus siglas en inglés,
//  es un valor que determina la cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula: `peso / (altura^2)`

// Escribir una función llamada `bmi` que reciba dos argumentos: peso y altura,
//  y retorne un string con las siguientes posibilidades:

// * "Bajo de peso" si el BMI < 18.5
// * "Normal" si está entre 18.5 y 24.9
// * "Sobrepeso" si está entre 25 y 29.9
// * "Obeso" si es igual o mayor a 30

// código de prueba
// console.log(bmi(65, 1.8)) // "Normal"
// console.log(bmi(72, 1.6)) // "Sobrepeso"
// console.log(bmi(52, 1.75)) //  "Bajo de peso"
// console.log(bmi(135, 1.7)) // "Obeso"

// ---------------- Brenyer -------------------

// 7. FizzBuzz

// Escribir una función llamada `fizzBuzz` que reciba un número y
//  retorne un string de acuerdo a lo siguiente:

// * "fizz" si el número es múltiplo de 3.
// * "buzz" si el número es múltiplo de 5.
// * "fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
// * Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.

// código de prueba
// console.log(fizzBuzz(6)); // "fizz"
// console.log(fizzBuzz(20)); // "buzz"
// console.log(fizzBuzz(30)); // "fizzbuzz"
// console.log(fizzBuzz(8)); // 8

// -------------------- Hector ----------------

function fizzBuzz (numero){
  if (numero % 3 == 0 && numero % 5 == 0){
    resultado = "FizzBuzz";
  } else if (numero % 3 == 0) {
    resultado = "Fizz";
  } else if (numero % 5 == 0) {
    resultado = "Buzz";
  } else {
    resultado = numero;
  }
  return resultado;
} 

console.log(fizzBuzz(6));
console.log(fizzBuzz(20));
console.log(fizzBuzz(30));
console.log(fizzBuzz(8));


// 8. Contar rango de números


// Escribir una función llamada `contarRango` que reciba dos 
// números y retorne cuántos números que hay entre ellos (excluyéndolos):

// **Nota:** Utiliza un ciclo en tu solución. Puedes asumir 
// que el primer número va a ser menor que el segundo.

// código de prueba
// console.log(contarRango(1, 9)) -> 7
// console.log(contarRango(1332, 8743)) -> 7410
// console.log(contarRango(5, 6)) -> 0

//  ----------------- Jose ----------------

function contarrango(a,b){
  let suma = 0;
  for(let i=(a+1); i<=(b-1); i++){
    suma += i;
  }
  }
  return suma; 


console.log(contarrango(1,9));
console.log(contarrango(1332,8743));
console.log(contarrango(5,6));


// 9. Transcribir ADN a ARN

// Escribir una función llamada `transcribir` 
// que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

// Los complementos son los siguientes:

// * G -> C
// * C -> G
// * T -> A
// * A -> U

// // código de prueba
// console.log(transcribir("ACGT")) -> "UGCA"
// console.log(transcribir("ACGTGGTCTTAA")) -> "UGCACCAGAAUU"
// -------------- Glayre ----------------

function transcribir(ADN){
  let arn= "";
  for (let i=0; i < ADN.length; i++){
    if (ADN[i] == "G"){
      arn += "C";
    }
    else if (ADN[i] == 'C'){
      arn += 'G';
    }
    else if (ADN[i] == 'T'){
      arn += 'A';
    }
    else if (ADN[i] == 'A'){
      arn += 'U';
    }
  }
  return arn;
}

console.log(transcribir("ACGT"));
console.log(transcribir("ACGTGGTCTTAA"));






// 10. Generar contraseña

// Escribir una función llamada `password` que reciba un string y 
// retorne un nuevo string realizando los siguientes cambios:

// * Las mayúsculas se reemplazan por minúsculas.
// * Se eliminan los espacios en blanco.
// * Reemplaza el caracter “a” por “4”.
// * Reemplaza el caracter “e” por “3”.
// * Reemplaza el caracter “i” por “1”.
// * Reemplaza el carater “o” por “0”.

// código de prueba
// console.log(password("hola")) -> "h0l4"
// console.log(password("esta es una Prueba")) -> "3st43sun4pru3b4"
// console.log(password("")) -> ""

// ----------------- Gabriel -----------------

function password(clave){
  let resultado = "";
  for (let i = 0; i < clave.length; i++){
    if (clave[i] == 'a'){
      resultado = resultado + '4';
    } else if (clave[i] == 'e'){
      resultado += '3';
    } else if (clave[i] == 'i'){
      resultado += '1';
    } else if (clave[i] == 'o'){
      resultado += '0';
    }else if (clave[i] !== ' '){
      resultado += clave[i].toLowerCase();
    }else{
    }
  }
  return resultado;
};

console.log(password("hoLa Soy una Clave"));


// 11. Encontrar números pares en un arreglo

// Escribir una función llamada `pares` que reciba un arreglo de números
//  y retorne un nuevo arreglo con los números pares únicamente.

// código de prueba
// console.log(pares([1, 2, 3, 4, 5, 6])) -> [2, 4, 6]
// console.log(pares([])) -> []

function pares(arreglo){
  let paresArreglo = [];
  for (let i = 0; i < arreglo.length; i++){
    if (arreglo[i] % 2 == 0){
      paresArreglo.push(arreglo[i])
    } 
  }
  return paresArreglo 
}
console.log(pares([1, 2, 3, 4, 5, 6]))
console.log(pares([100,45,12,7,1,0,53,82]))

// 12. Traducir números a palabras

// Escribir una función llamada `numerosAPalabras` que 
// reciba un arreglo de números (cada número en el rango de 0 a 10)
//  y retorne un nuevo arreglo convirtiendo cada número a su versión en palabras.

// código de prueba
// console.log(numerosAPalabras([0, 1, 2, 3, 4])) -> ["cero", "uno", "dos", "tres", "cuatro"]
// console.log(numerosAPalabras([5, 6, 7, 8, 9])) -> ["cinco", "seis", "siete", "ocho", "nueve"]

function numerosApalabras(numeros){
  let palabras = [];
  for (let i= 0; i < numeros.length; i++){
    switch (numeros[i]) {
    case 0:
        palabras.push("cero");
        break;
    case 1:
        palabras.push("uno");
        break;
    case 2:
        palabras.push("dos");
        break;
    case 3:
        palabras.push("tres");
        break;
    case 4:
        palabras.push("cuatro");
        break;
    case 5:
        palabras.push("cinco");
        break;
    case 6:
        palabras.push("seis");
        break;
    case 7:
        palabras.push("siete");
        break;
    case 8:
        palabras.push("ocho");
        break;
    case 9:
        palabras.push("nueve");
      break;
    case 10:
        palabras.push("diez");
      break;
    default:
        palabras.push("N/A");
    }
  }
  return palabras
}
console.log(numerosApalabras([5,0, 1, 2.2, 3, 4, "hola", 6, 7, 8, 9, 10]));


// ---------------- Glayre ----------------


// 13. Contraseña válida

// Escribir una función llamada `contrasenaValida` que reciba un string 
// y retorne `true` si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9".
//  De lo contrario debe retornar `false`.

// código de prueba
// console.log(contrasenaValida("2Fj(jjbFsuj")) // true
// console.log(contrasenaValida("eoZiugBf&g9")) // true
// console.log(contrasenaValida("hola")) // false
// console.log(contrasenaValida("")) // false
// ----------------- Sergio ----------------

// Para recibir informacion por consola debemos utilizar inp

function contrasenaValida(password){
  if(password == "2Fj(jjbFsuj" || password == "eoZiugBf&g9"){
      return true
  }else{
      return false
  }
}

let palabra = input("Ingrese una palabra: ");
console.log(contrasenaValida(palabra));


// 14. Encontrar palabras que empiecen por "a"

// Escribir una función llamada `empiezanConA` que reciba un arreglo
//  de strings y retorne un nuevo arreglo con todas las palabras que
// empiecen por "a" (mayúscula o minúscula).

// código de prueba
// console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
// console.log(empiezanConA(["beta", "delta", "gama"])) // []
// console.log(empiezanConA([])) // []
// palabra[i][0] -> primera letra
// ------------ Fernando ----------------

function empiezanConA(arreglo){ 
  let resultado = [];
  for (let i = 0; i < arreglo.length; i++)
  {
    if(arreglo[i][0].toLowerCase() == "a") {
     resultado.push(arreglo[i]); 
    }
  }
  return resultado
}
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []
// palabra[i][0] -> primera letra




// 15. Encontrar el número máximo

// Escribir una función llamada `max` que reciba un arreglo
//  de números y retorne el número máximo:

// **Nota:** Intentarlo hacer sin el método `Math.max` de JavaScript.

// código de prueba
// console.log(max([3, 9, 6])) // 9
// console.log(max([67, 35, 54, 26])) // 67
// console.log(max([5, 9, 2, 4, 5, 7])) // 9
// ------------- Sergio ----------------

function max(array){
  let max = array[0];
  for(let i = 1; i < array.length; i++){
      if(array[i] > max){
          max = array[i]
      }
  }
  return max
}
console.log(max([3, 9, 6]))
console.log(max([67, 35, 9999954, 26]))
console.log(max([5, 9, 2, 4, 5, 7]))



// 16. Encontrar palabras que terminan en "s"

// Escribir una función llamada `terminanConS` que reciba un arreglo
//  de strings y retorne un nuevo arreglo con todas las palabras que
//  terminan con "s" (mayúscula o minúscula).

// código de prueba
// console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
// console.log(terminanConS(["beta", "delta", "gama"])) // []
// console.log(terminanConS([])) // []
// ultimo elemento -> palabra.length - 1

// ------------- Sergio ----------------

function terminanConS(array){
  let newArray = [];
  for(let i = 0; i < array.length; i++){
      if(array[i][array[i].length - 1] == "s" || array[i][array[i].length - 1] == "S"){
          newArray.push(array[i])
      }
  }
  return newArray
}
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"]))
console.log(terminanConS(["betaS", "sdelsta", "gamas"]))
console.log(terminanConS([])) 