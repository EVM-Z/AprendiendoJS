const personas=[
    {nombre:'Juan', edad:20},
    {nombre:'Pablo', edad:50},
    {nombre:'Alejandra', edad:23, aprendiendo: 'JavaScript'},
    {nombre:'Karen', edad:28},
    {nombre:'Miguel', edad:33}
];

// Obtener las personas mayores de 25 años
const mayores=personas.filter(personas=>personas.edad>25);
console.log(mayores);
console.log('=====');

// Extraer informacion de Alejandra
const alejandra=personas.find(personas=>personas.nombre==='Alejandra');
let {aprendiendo}=alejandra;
console.log(aprendiendo);
console.log('=====');

// Suma total de todas las edades de las personas
// Reduce
let total=personas.reduce((edadTotal, peronas)=>{
    return edadTotal+peronas.edad;
}, 0);
console.log(total/personas.length);