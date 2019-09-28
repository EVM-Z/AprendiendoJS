// Objet Literal
const persona={
    nombre:'Juan',
    edad:80,
    anioNacimiento: function(){
        return new Date().getFullYear() - this.edad;
    }
}

console.log(persona.anioNacimiento());

// Object contructor
function Tarea(nombre, urgencia){
    this.nombre=nombre;
    this.urgencia=urgencia;
}

// Crear nuevas tareas
const tarea1=new Tarea('Aprender JavaScript', 'Urgente');
const tarea2=new Tarea('Preparar cafe', 'Urgente');
const tarea3=new Tarea('Pasear al perro', 'Media');
const tarea4=new Tarea('Conocer a mis suegros', '0');

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);