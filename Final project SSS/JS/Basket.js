// Создаем объект корзины
const shoppingCart = {
    items: [],
    total: 0,

    // Добавление товара в корзину
    addItem: function (name, price) {
        this.items.push({ name, price });
        this.calculateTotal();
    },

    // Подсчет общей стоимости
    calculateTotal: function () {
        this.total = this.items.reduce((sum, item) => sum + item.price, 0);
        this.updateCartUI();
    },

    // Обновление интерфейса корзины
    updateCartUI: function () {
        // Ваш код для обновления интерфейса корзины, например, вывод общей стоимости в какой-то элемент на странице
        console.log(`Total: $${this.total}`);
    }
};

// Функция для добавления товара в корзину при нажатии кнопки
function addToCart(name, price) {
    shoppingCart.addItem(name, price);
}

// Обработчики событий для кнопок "В корзину"
document.querySelectorAll('.card__add').forEach(button => {
    button.addEventListener('click', function () {
        // Получаем информацию о товаре из родительской карточки
        const card = this.closest('.card');
        const title = card.querySelector('.card__title').textContent;
        const discountPrice = parseFloat(card.querySelector('.card__price--discount').textContent);
        
        // Вызываем функцию добавления товара в корзину
        addToCart(title, discountPrice);
    });
});
