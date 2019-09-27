class Param {
    constructor(element) {
        // this.name = element.value;
        this.price = +element.dataset['price'];
        this.calories = +element.dataset['calories'];
    }
}

class Burger {
    constructor(size, add, topping) {

        this.size = new Param(this._select(size));
        this.add = new Param(this._getInside(add));
        this.toppings = this._getToppings(topping);
    }

    _select(name) {
        return document.querySelector(`input[name="${name}"]:checked`);
    }

    // _getInside(name) {
    //     let result = [];
    //     в цикле для каждго имени начинки
    //     if (значение в инпуте !== 0) {
    //          this._selectAllInside(name).forEach(el => result.push(new Param(el)));
    //          return result;
    //     }
    //     //    возвращать массив с объектами, значение наименований которых !==0
    //     //    document.querySelector('#salad').value
    //     //
    // }

    _getToppings(name) {
        let result = [];
        this._selectAll(name).forEach(el => result.push(new Param(el)));
        return result;
    }

    _selectAll(name) {
        return [...document.querySelectorAll(`input[name="${name}"]:checked`)];
    }

    // _selectAllInside(name) {
    //     возвращает массив с ДОМ элементами для перебора через forEach для создания экземпляра Param
    //     return [...document.querySelectorAll('input[type="number"]')];
    // }


    // _addAdd(fooGetValues) {
    ////    должен доставать значения из инпутов
    //    метод должен принимать количество каждой из начинок
    //    умножать на цену и каллории, которые берет из датасета
    //    и возвращать общую цену и общую сумму каллорий
    // }
    _sumPrice() {
        let result = this.size.price + this.add.price;
        this.toppings.forEach(topping => result += topping.price);
        return result;
    }

    _sumCalories() {
        let result = this.size.calories + this.add.calories;
        this.toppings.forEach(topping => result += topping.calories);
        return result;
    }

    showSum(price, calories) {
        document.querySelector(price).textContent = this._sumPrice();
        document.querySelector(calories).textContent = this._sumCalories();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('check').addEventListener('click', () => {
        let burger = new Burger('size', 'add',
            //
            'toppings');
        console.log(burger);
        burger.showSum('#price', '#calories');
    })
});
