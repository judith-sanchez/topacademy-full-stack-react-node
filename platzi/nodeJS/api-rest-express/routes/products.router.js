const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

// http://localhost:3000?size=1
router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i += 1) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }

  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Nothing to filter yet');
});

// : is indicating that it will receive a parameter
router.get('/:id', (req, res) => {
  // const productId = req.params.id;
  const { id } = req.params; // This syntax is saying that from all the properties of the object I just want id
  res.json({ id, name: 'test product', price: 0 });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'New products created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Product updated successfully',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Product deleted successfully',
    id,
  });
});
http: module.exports = router;
