const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

const Taco = require('./models/taco');

app.get('/tacos', (req, res) => {
  const tacos = Taco
    .getAll()
    .then((tacos) => res.status(200).json({ status: 'success', tacos }))
    .catch((error) => res.status(400).json({ status: 'error', error }));
});

app.listen(3000, () => console.log('api listening on port: 3000'));