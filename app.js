const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// 1. RUTA SECRETA (Pruébala primero: trizao.ai/arena-dev)
app.get('/arena-dev', (req, res) => {
    try {
        res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>TRIZAO | Dev Dashboard</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=JetBrains+Mono&display=swap');
                body { background-color: #050505; font-family: 'JetBrains Mono', monospace; color: white; }
                .neon-border { border: 1px solid #00F0FF; box-shadow: 0 0 15px rgba(0, 240, 255, 0.3); }
                .title-font { font-family: 'Orbitron', sans-serif; }
            </style>
        </head>
        <body class="p-10">
            <h1 class="title-font text-cyan-400 text-3xl mb-4">MODO DESARROLLADOR: ONLINE</h1>
            <div class="neon-border p-6 bg-cyan-900/10 rounded-lg">
                <p class="text-gray-400 text-sm mb-4">Bienvenido socio, la ruta secreta funciona perfectamente.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-black/50 p-4 border border-gray-800">
                        <h3 class="text-magenta-500 text-xs mb-2 uppercase">Victor's Logic</h3>
                        <p class="text-[10px] text-gray-500 italic">Esperando instrucciones...</p>
                    </div>
                    <div class="bg-black/50 p-4 border border-gray-800">
                        <h3 class="text-cyan-500 text-xs mb-2 uppercase">Socio's Access</h3>
                        <p class="text-[10px] text-green-500">ACCESO AUTORIZADO</p>
                    </div>
                </div>
            </div>
        </body>
        </html>
        `);
    } catch (e) {
        res.status(500).send("Error en la ruta secreta");
    }
});

// 2. RUTA PÚBLICA (El muro de entrada)
app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>TRIZAO | Synthetic Genesis</title>
        <style>
            body { background: #050505; color: #00F0FF; font-family: sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
            .logo { font-size: 3rem; font-weight: bold; letter-spacing: 10px; text-shadow: 0 0 20px #00F0FF; text-transform: uppercase; }
        </style>
    </head>
    <body>
        <div class="logo">TRIZAO</div>
    </body>
    </html>
    `);
});

// 3. ARRANCAR EL SERVIDOR
app.listen(port, () => {
    console.log('Server TRIZAO activo en puerto ' + port);
});
