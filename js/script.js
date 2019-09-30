descargarUsuarios(10);

function descargarUsuarios(cantidad){
    const api=`https://api.randomuser.me/?nat=US&results=${cantidad}`;

    // Llamado a fetch
    fetch(api)
        .then(respuesta=>respuesta.json())
        .then(datos=>console.log(datos.results));
}

function imprimirHTML(datos){
    datos.forEach(usuario=>{
        
        const li=document.createElement('li');

        // Accedemos a los valores de la API
        const {name:{first}, name:{last}, picture:{medium}, nat}=usuario;

        li.innerHTML=`
            Nombre: ${first} ${last}
            País: ${nat}
            imagen: <img src="${medium}">
        `;

        document.querySelector('#app').appendChild(li);
    });
}