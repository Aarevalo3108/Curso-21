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


function contarRango(a,b){
  rango = b-a -2; 
  console.log("El rango entre los números es: ", rango); 
}

// Escribir una función llamada `contarRango` que reciba dos 
// números y retorne cuántos números que hay entre ellos (excluyéndolos):

// **Nota:** Utiliza un ciclo en tu solución. Puedes asumir 
// que el primer número va a ser menor que el segundo.

// código de prueba
// console.log(contarRango(1, 9)) -> 7
// console.log(contarRango(1332, 8743)) -> 7410
// console.log(contarRango(5, 6)) -> 0

//  ----------------- Jose ----------------





// Transcribir ADN a ARN

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

// -------------- Glayre ----------------





// 20. Generar contraseña

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