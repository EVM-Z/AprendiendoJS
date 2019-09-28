let dinero=300;
let totalCarrito=500;
let tarjeta=true;

if((dinero>totalCarrito) || tarjeta){
    console.log('Pago Correcto');
}
else{
    console.log('Fondos Insuficientes');
}


let hora=14;
if(hora>0 && hora<=12){
    console.log('Buenos dias');
}
else if(hora>12 && hora<=18){
    console.log('Buenas tardes');
}
else if(hora>18 && hora<=24){
    console.log('Buenas noches');
}
else{
    console.log('Horario no valido');
}