// const persona = {
//     nombre: 'Eliseo',
//     apellido: 'Vazquez M',
//     edad: 80,
//     trabajo: true,
//     hogar: {
//         ciudad: 'Cancun',
//         pais: 'Mexico'
//     }
// }

// Accedemos a un valor determinado del objeto
// console.log(persona.edad);
// Una busqueda mas especifica
// console.log(persona.hogar.pais);

// console.log(persona.hogar.pais);

// Templates Strings
const nombre = 'Juan',
    trabajo = 'Desarrollador Web';

// Version vieja
console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo);
// Version nueva
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo} `);

const contenedorApp = document.querySelector('#mensaje');

let html = '<ul>' +
                '<li> Nombre: ' + nombre + '</li>' +
                '<li> Trabajo: ' + trabajo + '</li>' +
            '</ul>';

let html2 = `<ul>
            <li>Nombre: ${nombre}</li>
            <li>Trabajo: ${trabajo}</li>
            </ul>`;

contenedorApp.innerHTML = html;