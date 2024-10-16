const express = require('express');
const app = express();
const port = 8081;

app.get('/', (req, res) => {
  res.send('¡Hola desde el backend!');
});

app.listen(port, () => {
  console.log(`Backend corriendo en http://localhost:${port}`);
});