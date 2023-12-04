# Frontend

## Integrar Vite

[Vite](https://vitejs.dev/guide/)
~~~
npm create vite@latest
~~~
#### Una vez creado el nombre del proyecto vite
~~~
npm install
npm run dev
~~~

#### Modificar el CSS
~~~
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

.button {
  display: flex;
  justify-content: center;
  padding: 10px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #007BFF;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.card {
  display: flex;
  align-items: center;
}

#message {
  margin-left: 10px;
}

~~~

#### Modificar el index.html
~~~
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <link rel="icon" type="image/svg+xml" href="/vite.svg"/>
  <link rel="stylesheet" type="text/css" href="style.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Web Service</title>
</head>
<body>
<div id="app"></div>
<div>
  <h1>Ping al Web Service</h1>
  <div class="button">
    <button id="ping" type="button" value="ping">Haz clic aquí</button>
  </div>
  <div class="card">
    <h5>Mensaje</h5>
    <p id="message"></p>
  </div>
</div>
</body>
<script type="text/javascript" src="main.js" defer></script>
</html>
~~~

#### Funcionalidades del main.js
~~~
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
~~~
