// Object Literal Enhacement

const banda='Metalica',
    genero='Heavy Metal',
    canciones=['Master', 'Master de Master', 'Jefe'];

// Forma antigua de hacerlo
const metallica={
    banda:banda,
    genero:genero,
    canciones:canciones
}

console.log(metallica);

// Forma nueva de acceder a los valores
const metallica={banda, genero, canciones}

console.log(metallica);