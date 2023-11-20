// Variables globales
let primerNumero = "";
let operador = "";
let operadorPulsado = false;

const vaciar = () => {
   document.getElementById("pantalla").value = "";
   rellenar_info("");
   primerNumero = "";
   operador = "";
   operadorPulsado = false;
}

const cuadrado = () => {
   if (validar()) {
      let num = parseFloat(document.getElementById("pantalla").value);
      let resultado = num * num;
      document.getElementById("pantalla").value = resultado;
      rellenar_info(resultado);
   }
}

// Otras funciones y lógica JavaScript
// ...

const rellenar_info = (resultado) => {
   let infoElement = document.getElementById("info");

   if (resultado === "Error") {
      infoElement.textContent = "Info: Entrada no válida";
   } else if (resultado < 100) {
      infoElement.textContent = "Info: El resultado es menor que 100";
   } else if (resultado >= 100 && resultado <= 200) {
      infoElement.textContent = "Info: El resultado está entre 100 y 200";
   } else {
      infoElement.textContent = "Info: El resultado es superior a 200";
   }
}

// Función de validación
const validar = () => {
   let inputValor = document.getElementById("pantalla").value.trim();

   if (inputValor === "") {
      return true;  
   } else if (/^-?\d+(\.\d+)?(,-?\d+(\.\d+)?)*$/.test(inputValor)) {
      return true;  
   } else {
      document.getElementById("pantalla").value = "Error";
      return false; 
   }
}
