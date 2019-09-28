// Metodos
const musica = {
    reproducir: function(cancion){
        console.log('Reproduciendo la cancion : ' + cancion);
    },
    pausar: function(){
        console.log('Paused...');
    }
}

// Los metodos tambien pueden ir por fuera
musica.borrar = function(id){
    console.log('Borrando la canción cin el ID : ' + id);
}

musica.reproducir('Hotel California');
musica.pausar();
musica.reproducir('Better thans Drugs');
musica.borrar(121);