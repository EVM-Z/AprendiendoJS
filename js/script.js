// Scope

// Variable global let
let musica='Rock';

if(musica){
    // Variable local dentro del ciclo
    let musica='Grunge';
    console.log('Dentro del if '+musica);
}

console.log('Fuera del if '+musica);