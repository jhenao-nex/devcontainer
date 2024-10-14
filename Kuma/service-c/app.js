const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.get('/', (req, res) => {
  res.send('Hello from Service C!');
});

app.listen(PORT, () => {
  console.log(`Service C running on port ${PORT}`);
});
