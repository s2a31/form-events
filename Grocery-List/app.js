const form = document.querySelector('form');
const list = document.querySelector('#list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const productInput = form.elements.product;
  const qtyInput = form.elements.qty;
  addProduct(productInput.value, qtyInput.value);
  productInput.value = '';
  qtyInput.value = '';
});

const addProduct = (product, qty) => {
  const newItem = document.createElement('li');
  newItem.innerText = `${qty} ${product}`;
  list.appendChild(newItem);
};

list.addEventListener('click', function (e) {
  e.target.nodeName === 'LI' && e.target.remove();
});