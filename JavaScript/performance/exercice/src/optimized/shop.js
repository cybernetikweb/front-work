import { products } from './products';
import { renderProducts } from './rendering';

const addProduct = async e => {
  e.preventDefault();
  const mod = await import('./product-management.js')
  mod.addProduct(e)
};

const deleteProduct = async productId => {
  const mod = await  import('./product-management.js');
  mod.deleteProduct(productId)
};

const initProducts = () => {
  renderProducts(products, deleteProduct);
};

const addProductForm = document.getElementById('new-product');

initProducts();

addProductForm.addEventListener('submit', addProduct);
