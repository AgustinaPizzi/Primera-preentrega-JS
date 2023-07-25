
function convertir(peso){
    const tasaCambio = 0.049;
    const dolares = peso * tasaCambio;
    
    return dolares;
}
const peso= parseFloat(prompt("Bienvenido al conversor, ingrese la cantidad de pesos que desea convertir a dolares"));

if(peso){
    const dolaresConvertidos = convertir(peso);
    alert(`${peso} pesos equivale a ${dolaresConvertidos} dolares`);
}else{
    alert("El valor ingresado no es válido");
}
