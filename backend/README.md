# Backend

## Configuración inicial
### Descargar Node.js
[Node.js](https://nodejs.org/)

### Integrar Express
[express](https://www.npmjs.com/package/express)

~~~
npm install express
~~~

## Creación del servidor
~~~
node .\index.js
~~~
### Escribir el index.js
#### Establecer el método GET

## Mejora del servidor
### Integrar CORS
~~~
npm install cors
~~~

Código ejemplo del index.js de Express y Cors para un Web Service:

```javascript
const express = require('express') //Habilitar express
const app = express() // Usar express en el proyecto

const cors = require('cors');
app.use(cors()); //Habilitar cors

//Método GET
app.get('/', function (req, res) {
    res.send('Hello World')
}) 

//Ruta de acceso
app.get('/ping', (req, res)=>{
    res.status(200).json (
        {
            message: 'poing'
        }
    )
});

//Puerto del Servidor
app.listen(3000)
