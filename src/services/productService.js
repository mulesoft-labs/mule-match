import 'isomorphic-fetch';

const baseUri = CONFIG.BACKEND.URI;

const productService = {
  getProducts: async () => {
    const response = await fetch(`${baseUri}/products`);
    return await response.json();
  }
};

export default productService;
