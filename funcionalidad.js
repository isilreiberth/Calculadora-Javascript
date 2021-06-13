"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const calculadora = document.querySelector(".calculadora");
  const botones = calculadora.querySelector(".calculadora__botones");
  const display = document.querySelector(".calculadora__display");

  botones.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      const tecla = e.target;
      const accion = tecla.dataset.accion;

      const contenidoDelBoton = tecla.textContent;
      const numeroMostrado = display.textContent;
      const teclaTipeadaAnteriormente =
        calculadora.dataset.teclaTipeadaAnteriormente;

      if (!accion) {
        console.log("boton de numero!");
        if (
          numeroMostrado === "0" ||
          teclaTipeadaAnteriormente === "operador"
        ) {
          display.textContent = contenidoDelBoton;
        } else {
          display.textContent = numeroMostrado + contenidoDelBoton;
        }
        calculadora.dataset.teclaTipeadaAnteriormente = "numero";
      }
      if (
        accion === "sumar" ||
        accion === "restar" ||
        accion === "multiplicar" ||
        accion === "dividir"
      ) {
        console.log("boton de operacion!");
        calculadora.dataset.teclaTipeadaAnteriormente = "operador";
        calculadora.dataset.primerValor = numeroMostrado;
        calculadora.dataset.operador = accion;
      }
      if (accion === "decimal") {
        console.log("boton decimal!");
        display.textContent = numeroMostrado + ".";
        calculadora.dataset.teclaTipeadaAnteriormente = "decimal";
      }
      if (accion === "borrar") {
        console.log("boton de borrar!");
        display.textContent = 0;
      }
      if (accion === "calcular") {
        console.log("boton de igual!");
        display.textContent = calcular(
          calculadora.dataset.primerValor,
          calculadora.dataset.operador,
          numeroMostrado
        );
      }
    }
  });
});

function calcular(n1, operador, n2) {
  let resultado = "";
  if (operador === "sumar") {
    resultado = parseFloat(n1) + parseFloat(n2);
  } else if (operador === "restar") {
    resultado = parseFloat(n1) - parseFloat(n2);
  } else if (operador === "multiplicar") {
    resultado = parseFloat(n1) * parseFloat(n2);
  } else if (operador === "dividir") {
    resultado = parseFloat(n1) / parseFloat(n2);
  }
  return resultado;
}
