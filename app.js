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

// RUTA SECRETA PARA TI Y VICTOR: EL DASHBOARD DE DESARROLLO
app.get('/arena-dev', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>TRIZAO | Dev Dashboard</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=JetBrains+Mono&display=swap');
            body { background-color: #050505; font-family: 'JetBrains Mono', monospace; }
            .neon-border { border: 1px solid #00F0FF; box-shadow: 0 0 15px rgba(0, 240, 255, 0.3); }
            .glass { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px); }
            .title-font { font-family: 'Orbitron', sans-serif; }
        </style>
    </head>
    <body class="text-white p-6">
        <header class="flex justify-between items-center mb-10 pb-4 border-b border-cyan-900">
            <div>
                <h1 class="title-font text-2xl text-cyan-400">TRIZAO_LABS <span class="text-xs text-magenta-500 animate-pulse">v0.1 BETA</span></h1>
                <p class="text-xs text-gray-500">BIENVENIDOS: SOCIO & VICTOR</p>
            </div>
            <div class="flex gap-4">
                <div class="px-3 py-1 bg-cyan-900/30 border border-cyan-500 rounded text-[10px] text-cyan-400">STATUS: ENCRYPTED</div>
                <div class="px-3 py-1 bg-green-900/30 border border-green-500 rounded text-[10px] text-green-400">SERVER: ONLINE</div>
            </div>
        </header>

        <main class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <section class="glass neon-border p-4 rounded-lg">
                <h2 class="title-font text-sm mb-4 text-cyan-300">MOTOR_PRISMA_VISUALS</h2>
                <div class="h-48 bg-black/50 rounded flex items-center justify-center border border-gray-800 relative overflow-hidden">
                    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
                    <p class="text-[10px] text-cyan-500/50 uppercase tracking-widest text-center">Esperando carga de <br>geometría 3D...</p>
                </div>
            </section>

            <section class="glass neon-border p-4 rounded-lg md:col-span-2">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="title-font text-sm text-cyan-300">GAME_LOGIC_TESTER</h2>
                    <span class="text-[10px] text-gray-500 italic">Esperando inputs de Victor...</span>
                </div>
                <div class="space-y-4">
                    <div class="p-3 bg-black/40 border-l-2 border-magenta-500 rounded">
                        <p class="text-xs text-magenta-400 font-bold mb-1">[INFO]</p>
                        <p class="text-xs text-gray-300">Carga aquí las leyes del juego "Infección Lógica" para testear contradicciones.</p>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <button class="py-2 bg-cyan-900/20 border border-cyan-700 hover:bg-cyan-500 hover:text-black transition text-xs uppercase font-bold">Simular Partida</button>
                        <button class="py-2 bg-gray-900/20 border border-gray-700 hover:bg-gray-700 transition text-xs uppercase font-bold">Inyectar Glitch</button>
                    </div>
                </div>
            </section>

            <section class="glass neon-border p-4 rounded-lg md:col-span-3">
                <h2 class="title-font text-sm mb-4 text-cyan-300">SISTEMA_LOGS</h2>
                <div class="text-[10px] space-y-1 text-gray-400 font-mono">
                    <p><span class="text-cyan-600">[19:42:01]</span> Conexión establecida desde IP: ADMIN_SESSION</p>
                    <p><span class="text-cyan-600">[19:42:05]</span> Protocolo 'Velo de Hype' activado en la raíz.</p>
                    <p><span class="text-magenta-600">[19:43:10]</span> Alerta: Esperando integración de smart contracts $TRZ...</p>
                </div>
            </section>
        </main>

        <footer class="mt-10 text-[10px] text-gray-600 text-center uppercase tracking-widest">
            Trizao Labs © 2026 | Propiedad de Socio & Victor
        </footer>
    </body>
    </html>
    `);
});
