// Function declaration
// La funcion se puede declarar antes que escribamos dicha funcion
saludar('Eliseo', 'Desarrollador Web');
saludar('Pedro', 'Medica');
saludar('Alejandra', 'Veterinaria');
saludar('Laura', 'Ingeniera');
function saludar(nombre = 'Visitante', trabajo = 'No Saebemos!'){
    console.log('Hola ' + nombre + ' tu trabajo es ' + trabajo);
}

// Function expression
// La funcion no se puede declarar antes que escribamos dicha funcion
const suma = function(a, b){
    console.log(a + b);
}
suma(10, 20);
suma(30, 40);
suma(50, 60);

// IIFE
(function(tecnologia){
    console.log('Aqui estoy aprediendo ' + tecnologia);
})('Javascript');