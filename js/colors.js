
let color1,color2,color3;

while(true){
    color1 = prompt("Bienvenido, ingrese uno de los tres colores primarios").toLowerCase();

    if (color1 ==="rojo" || color1 ==="azul" || color1 ==="amarillo"){
        break;
    }else{
        alert("ERROR el color ingresado no es correcto, intentalo de nuevo");
    }
}

while(true){
    color2 = prompt("Bien hecho! ingrese el segundo color primario").toLowerCase();

    if (color2 ==="rojo" || color2 ==="azul" || color2 ==="amarillo"){
        break;
    }else{
        alert("ERROR el color ingresado no es correcto, intentalo de nuevo");
    }
}

while(true){
    color3 = prompt("Felicitaciones, solo te queda uno").toLowerCase();
    if (color3 ==="rojo" || color3 ==="azul" || color3 ==="amarillo"){
        break;
    }else{
        alert("ERROR el color ingresado no es correcto, intentalo de nuevo");
    }
}
alert(`Bien hecho los colores primarios son: ${color1}, ${color2}, ${color3}`)
