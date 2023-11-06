const { faker } = require('@faker-js/faker');

class ProductService {
  constructor() {
    this.products = [];
    this.generate(); // Every time we create an instance of ProductService it will automatically generate 100 random products
  }

  async generate() {
    const limit = 100;

    for (let i = 0; i < limit; i += 1) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
      });
    }
  }

  async create(data) {
    if (!data || !data.name || !data.price || !data.image) {
      throw new Error(
        'Could not add new product. Missing required properties (name, price, or image).',
      );
    } else {
      const newProduct = {
        id: faker.string.uuid(),
        ...data,
      };
      this.products.push(newProduct);
      return newProduct;
    }
  }

  async getAllData() {
    if (this.products.length === 0) {
      throw new Error('No products found');
    }
    return this.products;
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductService;
