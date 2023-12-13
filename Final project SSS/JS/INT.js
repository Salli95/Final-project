function showLoginPopup() {
    document.getElementById('loginPopup').style.display = 'block';
}

function closeLoginPopup() {
    document.getElementById('loginPopup').style.display = 'none';
}

function setWelcomeMessage() {
    const username = document.getElementById('username').value;
    if (username.trim() !== '') {
        document.getElementById('welcomeMessage').textContent = `Добро пожаловать, ${username}!`;
        localStorage.setItem('username', username); // сохраняем имя в localStorage
        closeLoginPopup();
    } else {
        alert('Введите имя пользователя');
    }
}

// Функция, которая проверяет, есть ли имя пользователя в localStorage при загрузке страницы
function checkUsername() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        document.getElementById('welcomeMessage').textContent = `Добро пожаловать, ${storedUsername}!`;
    }
}

// Вызываем функцию при загрузке страницы
checkUsername();
