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