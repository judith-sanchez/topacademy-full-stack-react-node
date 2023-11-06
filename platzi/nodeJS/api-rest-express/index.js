// npm run dev -> see the changes in real time (-.- I DON'T NEED npm start at the same time)
// `${URL}/endpoint/id`
// Specific should go before dynamic
// The middlewares should be called after the router

const express = require('express');
const routerApi = require('./routes/index.js');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler.js');

const app = express();
const port = 3000;

// Middleware to receive json on the request
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Toptal!');
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);
app.use(boomErrorHandler);

app.listen(port, () => {
  console.log(`My port is ${port}`);
});
routerApi(app);
