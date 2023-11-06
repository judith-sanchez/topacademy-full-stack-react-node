// npm start -> start the server
// npm run dev -> see the changes in real time
// `${URL}/endpoint/id`
// Specific should go before dynamic

const express = require('express');
const routerApi = require('./routes/index.js');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Toptal!');
});

// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId,
//   });
// });

app.listen(port, () => {
  console.log(`My port is ${port}`);
});

routerApi(app);
