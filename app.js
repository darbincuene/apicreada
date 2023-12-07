const express = require('express');
const cors = require('cors'); // Fix the typo here
const { productos, vehiculos, personas } = require('./data/data');

const app = express();
app.use(cors());
const port = 4000;

app.get("/", (request, response) => {
    response.json({
        ok: true,
        routes: ["/api/productos", "/api/vehiculos", "/api/personas"]
    });
});

app.get("/api/productos", (req, res) => {
    res.json({ ok: true, data: productos });
});

app.get("/api/vehiculos", (req, res) => {
    res.json({ ok: true, data: vehiculos });
});

app.get("/api/personas", (req, res) => {
    res.json({ ok: true, data: personas });
});

app.listen(port, () => {
    console.log(`servidor corriendo en el puerto ${port}`);
});
