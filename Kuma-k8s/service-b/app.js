const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send('Hello from Service B!');
});

app.listen(PORT, () => {
  console.log(`Service B running on port ${PORT}`);
});
