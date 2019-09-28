// Tres formas de crear variables
// var nombreCliente = 'Juan'; //camelCase
// var nombre_cliente = 'Juan'; //underscore
// var NombreCliente = 'Juan'; //pascal case

// console.log(nombreCliente);

// let banda = 'Metalica',
//     cancion = 'Enter Sandam';

// let nombre;

// nombre = banda + ": " + cancion;

// console.log(nombre);

// let numero1 = 50,
//     numero2 = "10";
//     numero3 = "tres",
//     numero4 = "10.20";

// console.log(numero1 + numero2);

// Convierte el string a numero
// console.log(Number(numero2) + numero1);

// Convierte string a Entero
// console.log(parseInt(numero2) + numero1);

// let dato;
// dato = Number("20");
// dato = Number("-20.20");
// dato = Number(true);
// dato = Number(false);
// dato = Number(null);
// dato = Number("Hola Mundo");
// dato = Number([1,2,3,4]);

// // parseInt y parseFloat
// dato = parseInt("100");
// dato = parseInt("100.20");
// dato = parseFloat("100.20");


// let numero1 = "10203040.10203040";
// let numero2 = 10203040.10203040;
// console.log(Number(numero1).toFixed(5));
// console.log(numero2.toFixed(5));

// String
// const nombre = 'Juan';
// console.log(typeof nombre);

// numero
// const edad = "80.80";
// console.log(typeof edad);

// Boolean
// let aprendinedoJS = true;
// console.log(typeof aprendinedoJS);

// let valor;
// console.log(typeof valor);
// valor = 'Hola';
// console.log(typeof valor);
// valor = true;
// console.log(typeof valor);
// valor = 20;
// console.log(typeof valor);
// valor = "20";
// console.log(typeof valor);

const numeros = [10, 20, 30, 40, 50];

// console.table(numeros);

const meses = new Array('enero', 'febrero', 'marzo');
// Vemos el indice del arreglo
// console.log(meses[2]);

// Agregamos un elemento al final del arreglo
meses.push('Abril');
// Unshift agrega al inicio del arreglo
meses.unshift('Mes 0');
// Elimina el ultimo elemento del arreglo
meses.pop();
// Elimina el primer elemento del arreglo
meses.shift();
// Elimina de un rango en el arreglo
// meses.splice(0, 2);

meses.reverse();
// Ordenamiento de arreglo por nombre
let frutas = ['Platano', 'Manzana', 'Fresa', 'Naranaja'];

frutas.sort();

console.log(frutas);


// En un arreglo, podemos poner cualquier tipo de varlo
// const arreglo = ['Hola', 10, true, "si", null ,undefined];

console.log(meses);

// Verificamos si es un arreglo
// console.log(Array.isArray(arreglo));