const express = require('express');
const chiguirearPrecioDolar = require('./bcvScrapper');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname)); // Sirve archivos estáticos (como index.html)

app.get('/dolar', async (req, res) => {
    try {
        const valor = await chiguirearPrecioDolar('https://www.bcv.org.ve/');
        res.json({ valor });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el valor del dólar' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor Activo en -> http://localhost:${PORT}`);
});