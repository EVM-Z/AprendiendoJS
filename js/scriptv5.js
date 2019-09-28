// Function declaration
// La funcion se puede declarar antes que escribamos dicha funcion
// saludar('Eliseo', 'Desarrollador Web');
// saludar('Pedro', 'Medica');
// saludar('Alejandra', 'Veterinaria');
// saludar('Laura', 'Ingeniera');
// function saludar(nombre = 'Visitante', trabajo = 'No Saebemos!'){
//     console.log('Hola ' + nombre + ' tu trabajo es ' + trabajo);
// }

// Function expression
// La funcion no se puede declarar antes que escribamos dicha funcion
const suma = function(a=0, b=0){
    return a+b;
}

const multiplicar=function(a){
    return a*5;
}
let total;

let resultado=suma(10+20);
total=multiplicar(resultado);
console.log(total);

// IIFE
// (function(tecnologia){
//     console.log('Aqui estoy aprediendo ' + tecnologia);
// })('Javascript');