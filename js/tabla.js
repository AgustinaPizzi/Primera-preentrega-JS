

let numero = parseInt(prompt("Bienvenido, ingrese un numero del 1 al 10 para saber su tabla"));

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;

    alert(`${numero} * ${i} = ${resultado}`);
}