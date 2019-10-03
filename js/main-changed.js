function sendRequest(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status !== 200) {
                    reject();
                }
                const goods = JSON.parse(xhr.responseText);

                resolve(goods);
            }
        };
        xhr.send();
    });
}

class CartList {
    constructor() {
        this.items = [];
    }

    fetchItems() {
        return sendRequest('/goods')
            .then((items) => {
                this.items = items;
            });
    }

    total() {
        return this.items.reduce((acc, item) => acc + item.price, 0);
    }

    render() {
        return this.items.map((item) => new Item(item.title, item.price).render()).join('');
    }
}

class Item {
    constructor(title, price, img = 'https://placehold.it/200x150') {
        this.price = price;
        this.title = title;
        this.img = img;
    }

    render() {
        return `<div class="product-item">
            <img src="${this.img}" alt="Картинка">
            <div class="info">
              <h3>${this.title}</h3>
              <h3>${this.price}$</h3>
            </div>
            <button class="by-btn">Добавить</button>
          </div>`
    }
}

const items = new CartList();
items.fetchItems().then(() => {
    document.querySelector('.products').innerHTML = items.render();
    document.querySelector('.total').innerHTML = `<h3>Общая сумма товаров ${items.total()}</h3>`;
});