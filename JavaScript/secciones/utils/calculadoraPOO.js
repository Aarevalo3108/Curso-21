
class Calculadora{
  constructor(campo){
    this.campo = campo;
    this.resultado = 0;
  }

  evaluar(){
    this.resultado = eval(this.campo);
    return this.resultado;
  }
}


const calcular = document.getElementById("calcular");

calcular.addEventListener("click", () => {
  const campo = document.getElementById("campo").value;
  const calculadora = new Calculadora(campo);
  document.getElementById("campo").value = calculadora.evaluar();
  console.log(calculadora.resultado);
})

const campo = document.getElementById("campo");

campo.addEventListener("keyup", () => {
  const calculadora = new Calculadora(campo.value);
  document.getElementById("resultado").innerText = calculadora.evaluar();
  console.log(calculadora.resultado);
})