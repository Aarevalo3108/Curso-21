// Try - Catch: Manejo de errores de codigo en JS
// Imagina que estas desarrollando 
// una aplicacion web y te encuentras con un error inesperado
// Similar al if pero:
// * Mi condicion es un error
// * Necesito el catch para manejar el error

// if, else if y else
// try, catch y finally
try {
  // console.log("logramos transformar una constante""); <- este error de SyntaxError no se puede capturar con un try-catch
  const euler = Math.E;
  euler = 2;
  console.log("logramos transformar una constante");
  console.log(euler);
} catch (error) {
  console.log(error);
} finally {
  console.log("Esto siempre se ejecutara");
}
console.log("Esto sigue ejecutandose");
const frutas = ["Manzana", "Pera", "Sandia", "Durazno", "Tamarindo"];
console.log(frutas);