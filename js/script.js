let puntaje=1000;
const logueado=true;
const edad=17;

if(puntaje){
    console.log('Si hay puntaje y es de '+ puntaje);
}
else{
    console.log('No hay puntaje');
}

let dinero=300;
let totalCarrito=500;
let tarjeta=false;

if(dinero>totalCarrito){
    console.log('Pago Correcto');
}
else if(tarjeta){
    console.log('Pagaste con tarjeta');
}
else{
    console.log('Fondos Insuficientes');
}