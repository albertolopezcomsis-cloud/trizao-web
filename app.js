const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// 1. LA PANTALLA PÚBLICA (Lo que verá todo el mundo)
const comingSoonHTML = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>TRIZAO | Under Construction</title>
    <style>
        body { background: #050505; color: #00F0FF; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; overflow: hidden; }
        .container { text-align: center; }
        .logo { font-size: 3rem; font-weight: bold; letter-spacing: 10px; margin-bottom: 10px; text-shadow: 0 0 20px #00F0FF; }
        .status { color: #FF00FF; font-size: 0.8rem; letter-spacing: 3px; animation: blink 1.5s infinite; }
        @keyframes blink { 0% { opacity: 0; } 50% { opacity: 1; } 100% { opacity: 0; } }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">TRIZAO</div>
        <div class="status">SISTEMA ENCRIPTADO - DESPERTANDO...</div>
    </div>
</body>
</html>
`;

// 2. RUTA PÚBLICA (Cualquiera que entre a trizao.ai verá esto)
app.get('/', (req, res) => {
    res.send(comingSoonHTML);
});

// 3. RUTA SECRETA PARA TI Y VICTOR (Aquí es donde trabajaremos)
// Solo tú y Victor sabréis que esto existe. Ejemplo: trizao.ai/arena-dev
app.get('/arena-dev', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
    <head><title>TRIZAO DEV AREA</title></head>
    <body style="background: #111; color: lime;">
        <h1>BIENVENIDO, SOCIO.</h1>
        <p>Esta es la zona de pruebas. Aquí es donde montaremos el código de Victor.</p>
        </body>
    </html>
    `);
});

app.listen(port, () => {
    console.log('TRIZAO oculto y operativo.');
});
