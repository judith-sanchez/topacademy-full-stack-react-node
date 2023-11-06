const express = require('express');
const ProductService = require('../services/product.service.js');
const router = express.Router();
const service = new ProductService();

// http://localhost:3000?size=1
router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Nothing to filter yet');
});

// : is indicating that it will receive a parameter
router.get('/:id', (req, res) => {
  // const productId = req.params.id;
  const { id } = req.params; // This syntax is saying that from all the properties of the object I just want id
  // All parameters are sent as strings
  if (id === '999') {
    res.status(404).json({
      message: 'Not Found',
    });
  } else {
    res.status(200).json({ id, name: 'test product', price: 0 });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
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
