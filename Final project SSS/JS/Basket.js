   // Используем JavaScript для добавления товаров в корзину

    // Создаем объект корзины
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Функция для добавления товара в корзину
    function addToCart(itemName, price) {
        const item = {
            name: itemName,
            price: price
        };

        // Добавляем товар в корзину
        cart.push(item);

        // Сохраняем корзину в localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Обновляем отображение корзины
        updateCartDisplay();
    }

    // Функция для обновления отображения корзины
    function updateCartDisplay() {
        // Находим элемент, где будет отображаться корзина (предположим, это div с id "cartTotal")
        const cartTotalElement = document.getElementById('cartTotal');

        // Вычисляем общую стоимость товаров в корзине
        const total = cart.reduce((acc, item) => acc + item.price, 0);

        // Обновляем текст в элементе
        cartTotalElement.textContent = `Общая стоимость: $${total.toFixed(2)}`;
    }

    // Добавляем обработчики клика на кнопки "В корзину"
    const addToCartButtons = document.querySelectorAll('.card__add');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const card = this.closest('.card');
            const itemName = card.querySelector('.card__title').textContent;
            const price = parseFloat(card.querySelector('.card__price--discount').textContent);

            addToCart(itemName, price);
        });
    });

    // Обновляем отображение корзины при загрузке страницы
    updateCartDisplay();


    const clearCartBtn = document.getElementById('clearCartBtn');
    clearCartBtn.addEventListener('click', function () {
        // Очищаем корзину в localStorage
        localStorage.removeItem('cart');

        // Очищаем массив корзины
        cart.length = 0;

        // Обновляем отображение корзины
        updateCartDisplay();
    });
