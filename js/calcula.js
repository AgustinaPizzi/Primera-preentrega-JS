
function calculadora(operacion, num1, num2) {
    switch (operacion) {
      case "+":
        return num1 + num2;
  
      case "-":
        return num1 - num2;
  
      case "*":
        return num1 * num2;
  
      case "/":
        return num1 / num2;
  
      default:
        return "Error, operacion no encontrada. Intenta nuevamente";
    }
  }
  const operacion = prompt("Ingrese la operacion que desea realizar");
  const numero1 = parseInt(prompt("Bienvenido a la calculadora, por favor ingrese un numero"));
  const numero2= parseInt(prompt("Ahora ingrese un segundo numero"));

  const resultado = calculadora(operacion,numero1,numero2);
  alert(`El resultado de su operacion es ${resultado}`);
