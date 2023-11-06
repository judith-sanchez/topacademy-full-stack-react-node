const productsRouter = require('./products.router.js');

function routerApi(app) {
  app.use('/products', productsRouter);
}

module.exports = routerApi;
