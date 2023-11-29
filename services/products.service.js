const boom = require('@hapi/boom');
const { products } = require('../mocks');

class ProductService {

  constructor() {
    this.products = [...products];
  }

  async create(product) {
    const id = this.products.reduceRight((maxId, p) => Math.max(p.id, maxId), -1) + 1;
    const createdProduct = { id, ...product };
    this.products.push(createdProduct);
    return createdProduct;
  }

  async list(page = 1) {
    const limit = 10;
    const offset = (page - 1) * limit;
    return this.products.slice(Number(offset), Number(offset) + Number(limit));
  }

  async findOne(productId) {
    const product = this.products.find(p => p.id === Number(productId));
    if (!product) {
      throw boom.notFound('Product not found');
    };
    return product;
  }

  async update(id, product) {
    const productIdx = this.products.findIndex(p => p.id === Number(id));
    if (productIdx === -1) {
      throw boom.notFound('Product not found');
    }
    const upadtedProduct = { ...this.products[productIdx], ...product, };
    this.products[productIdx] = upadtedProduct;
    return this.products[productIdx];
  }

  async delete(id) {
    const productIdx = this.products.findIndex(p => p.id === Number(id));
    if (productIdx === -1) {
      throw boom.notFound('Product not found');
    }
    this.products.splice(productIdx, 1);
  }
}

module.exports = ProductService;
