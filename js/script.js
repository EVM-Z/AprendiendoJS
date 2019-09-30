// Arreglo
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascrit'];

// Arreglo con objetos
const carrito=[
    {id:1, producto: 'Libro'},
    {id:1, producto: 'Camisa'},
    {id:3, producto: 'Disco'}
];

// Objeto
let automovil={
    modelo: 'Camaro',
    motor: 6.0,
    anio: 1967,
    marca: 'Chevrolet'
}

// Accedemos a los datos de forma individual
Object.values(automovil).forEach(info => {
    console.log(info);
});

console.log('=====');

// Crea una copia de un arreglo
Object.values(automovil).map(info =>{
    console.log(info);
});

// Accede a los valores de un objeto
Object.values(automovil).forEach(info => {
    console.log(info);
});

console.log('=====');

Object.values(automovil).map(info => {
    console.log(info);
});

console.log('=====');

// Trae todos los pendientes que tienes
// for(let i=0; i<pendientes.length; i++){
//     console.log(pendientes[i]);
// }

console.log('=====');

// Una forma mas corta que la anterior
// for(pendiente of pendientes){
//     console.log(pendiente);
// }