const products = [
  {id: 1, title: 'Notebook', price: 1000},
  {id: 2, title: 'Mouse', price: 100},
  {id: 3, title: 'Keyboard', price: 250},
  {id: 4, title: 'Gamepad', price: 150},
];

const renderProduct = (title, price, img = 'https://placehold.it/200x150') => {
  return `<div class="product-item">
            <img src="${img}" alt="Картинка">
            <div class="info">
              <h3>${title}</h3>
              <h3>${price}$</h3>
            </div>
            <button class="by-btn">Добавить</button>
          </div>`;
};

const renderProducts = list =>
    document.querySelector('.products').innerHTML = list
        .map(item => renderProduct(item.title, item.price))
        .join('');

renderProducts(products);
