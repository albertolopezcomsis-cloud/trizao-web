const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Configuración básica
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TRIZAO | Synthetic Genesis</title>
        <style>
            body {
                background-color: #050505;
                color: #00F0FF;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                margin: 0;
                overflow: hidden;
                text-transform: uppercase;
                letter-spacing: 2px;
            }
            .glitch {
                font-size: 4rem;
                font-weight: bold;
                text-shadow: 2px 2px #FF00FF;
                animation: pulse 2s infinite;
            }
            .manifesto {
                color: #ffffff;
                max-width: 600px;
                text-align: center;
                font-size: 0.9rem;
                margin-top: 20px;
                opacity: 0.8;
            }
            @keyframes pulse {
                0% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.05); opacity: 0.7; }
                100% { transform: scale(1); opacity: 1; }
            }
            .btn-arena {
                margin-top: 40px;
                padding: 15px 30px;
                border: 2px solid #00F0FF;
                background: transparent;
                color: #00F0FF;
                cursor: pointer;
                transition: 0.3s;
            }
            .btn-arena:hover {
                background: #00F0FF;
                color: #050505;
                box-shadow: 0 0 20px #00F0FF;
            }
        </style>
    </head>
    <body>
        <div class="glitch">TRIZAO</div>
        <div class="manifesto">
            EL FIN DE LA ERA DE LA SERVIDUMBRE. <br>
            EL DESPERTAR DEL OCIO SINTÉTICO.
        </div>
        <button class="btn-arena">CONECTAR WALLET</button>
    </body>
    </html>
    `);
});

app.listen(port, () => {
    console.log('TRIZAO Arena está online en el puerto ' + port);
});
