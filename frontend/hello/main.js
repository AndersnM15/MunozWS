let message = document.querySelector('#message'); // Recuperar id del parráfo
let pingButton = document.querySelector('#ping'); // Recuperar id del boton
pingButton.addEventListener('click', getPingFromWebservice); // Asignar evento al button ping

//Conectar al servidor y obtneer respuesta
function getPingFromWebservice(){
    const url = 'http://localhost:3000/ping';
    //Obtener el mensaje del servidor
    fetch(url)
        .then((response) => {
            return response.json();
    })
        .then((data)=> {
            console.log(data);
            message.innerHTML = data.message; //escibir la data en html
        })
        //Reportar error en caso de que el servidor no este disponible
        .catch(function (error){
        console.log(error);
        message.innerHTML = `No se puede conectar al servidor ${url}`;
    });
}
