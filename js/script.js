// Destructuring

const cliente={
    nombre: 'Alejandra',
    tipo: 'Premium',
    datos:{
        ubicacion:{
            ciudad: 'Mexico',
            pais: 'Mexico'
        },
        cuenta:{
            desde: '10-12-2012',
            saldo: 4000
        }
    },
    gustos:{
        musica:['Trance', 'Rock']
    }
}

console.log(cliente);
console.log('=====');

// Crear la variable
// Forma antigua
// const nombreCliente=cliente.nombre,
//     tipoCliente=cliente.tipo,
//     ubicacionCliente=cliente.datos.ubicacion;

// console.log(ubicacionCliente);
console.log('=====');



// Forma Nueva
// let {nombre, tipo}=cliente;
// let {datos:{ubicacion:{ciudad}}}=cliente;
// console.log(ciudad);

// Extraemos un dato especifico del objeto
// let {datos:{cuenta:{saldo}}}=cliente;
// console.log(saldo);

let {gustos:musica}=cliente;
console.log(musica);